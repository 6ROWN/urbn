import React, { useState, useRef } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form"; // Import FormProvider
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { FormItem, FormLabel, FormMessage } from "../ui/form";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { LucideImagePlus, LucideX } from "lucide-react";
import axios from "axios";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/config/firebase";
import { toast } from "sonner";

// Amenity options
const amenitiesList = [
  "Smoke alarm",
  "Carbon monoxide alarm",
  "First aid kit",
  "Self check-in with lockbox",
  "Security cameras",
  "Hangers",
  "Bed linens",
  "Extra pillows & blankets",
  "Iron",
  "TV with standard cable",
  "Refrigerator",
  "Microwave",
  "Dishwasher",
  "Coffee maker",
];

// Enhanced validation schema with Zod
const propertySchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  price: z
    .number({ invalid_type_error: "Required" })
    .positive("Price must be positive"),
  location: z.string().min(3, "Location must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  imageUrl: z.array(
    z
      .instanceof(File)
      .refine((file) => file.size <= 5 * 1024 * 1024, {
        message: "Each image must be less than 5MB",
      })
      .refine(
        (file) => ["image/jpeg", "image/png", "image/gif"].includes(file.type),
        {
          message: "Each image must be a JPG, PNG, or GIF",
        }
      )
  ),
  propertyType: z.enum(["Apartment", "House", "Condo", "Land"]),
  propertyStatus: z.enum(["Rent", "Sell"]),
  size: z
    .number({ invalid_type_error: "Required" })
    .min(1, "Size must be a positive number"),
  yearBuilt: z
    .number({ invalid_type_error: "Required" })
    .min(1000, "Year built must be valid"),
  bedrooms: z
    .number({ invalid_type_error: "Required" })
    .min(1, "Number of bedrooms must be at least 1"),
  bathrooms: z
    .number({ invalid_type_error: "Required" })
    .min(1, "Number of bathrooms must be at least 1"),
  garage: z
    .number({ invalid_type_error: "Required" })
    .min(1, "Number of bathrooms must be at at least 1"),
  agentContactName: z
    .string({
      invalid_type_error: "Invalid name",
      required_error: "Name is required",
    })
    .min(3, {
      message: "Name must be at least 3 characters long",
    })
    .max(26, {
      message: "Name must be at most 26 characters long",
    }),
  agentContactEmail: z.string().email("Invalid email address"),
  agentContactPhone: z.string().min(10, "Invalid phone number"),
  virtualTourUrl: z.string().url("Invalid URL").optional(),
  energyEfficiency: z.enum(["A", "B", "C", "D", "E"]).optional(),
  furnished: z.enum(["Furnished", "Unfurnished", "Partially Furnished"]),
  amenities: z.object(
    amenitiesList.reduce((acc, amenity) => {
      acc[amenity] = z.boolean().optional();
      return acc;
    }, {} as Record<string, z.ZodTypeAny>)
  ),
});

type PropertyFormData = z.infer<typeof propertySchema>;

const AddPropertyForm: React.FC = () => {
  const methods = useForm<PropertyFormData>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      imageUrl: [],
      amenities: amenitiesList.reduce((acc, amenity) => {
        acc[amenity] = false;
        return acc;
      }, {} as Record<string, boolean>),
    },
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files).slice(0, 5); // Limit to 5 files

      // Show image previews
      const newImagePreviews = newFiles.map((file) =>
        URL.createObjectURL(file)
      );
      setImagePreviews((prevImages) => [...prevImages, ...newImagePreviews]);

      // Upload files to Cloudinary
      try {
        const uploadPromises = newFiles.map((file) =>
          uploadImageToCloudinary(file)
        );
        const uploadedFiles = await Promise.all(uploadPromises); // Get all uploaded file URLs
        setSelectedImages((prevImages) => [
          ...prevImages,
          ...uploadedFiles, // Store the URLs of the uploaded images
        ]);
      } catch (error) {
        console.error("Error uploading image: ", error);
      }
    }
  };

  // Function to upload image to Cloudinary
  const uploadImageToCloudinary = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    ); // Using the upload preset from environment variable
    formData.append("folder", "urban-house-market-place/assets/images/"); // Specifying the folder in Cloudinary

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
        }/image/upload`,
        formData
      );

      // Return the URL of the uploaded image
      return response.data.secure_url;
    } catch (error) {
      throw new Error("Cloudinary upload failed");
    }
  };

  // onSubmit function to handle the form submission
  const onSubmit = async (data: PropertyFormData) => {
    setIsSubmitting(true);
    const propertyCollectionRef = collection(db, "property");

    console.log({ ...data, imageUrl: selectedImages }); // Now selectedImages contains Cloudinary URLs
    try {
      await addDoc(propertyCollectionRef, { ...data, images: selectedImages });
      toast.success("Property added successfully!");
    } catch (error) {
      console.error("Error adding property: ", error);
      toast.error("Error adding property: ", error as any);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to handle image deletion
  const handleDeleteImage = (index: number) => {
    setImagePreviews((prevImages) => {
      // Remove the image at the specified index
      const updatedImages = prevImages.filter((_, i) => i !== index);

      // Optionally revoke object URLs to avoid memory leaks
      if (prevImages[index]?.startsWith("blob:")) {
        URL.revokeObjectURL(prevImages[index]);
      }

      return updatedImages;
    });

    // Also remove the corresponding image from selectedImages (Cloudinary URLs)
    setSelectedImages((prevSelectedImages) => {
      const updatedSelectedImages = prevSelectedImages.filter(
        (_, i) => i !== index
      );
      return updatedSelectedImages;
    });
  };

  return (
    <div className="bg-custom-light-green h-full py-12">
      <FormProvider {...methods}>
        {/* Wrap the form with FormProvider */}
        <div className="max-w-4xl mx-auto ">
          {/* <h2 className="text-3xl font-bold text-center mb-6">
            Add New Property
          </h2> */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mx-4">
            {/* Image Upload */}
            <div className="p-6 bg-white shadow-md rounded-md border">
              <FormItem>
                <FormLabel
                  className="text-custom-green font-semibold text-2xl"
                  htmlFor="imageUrl"
                >
                  Upload Media
                </FormLabel>

                <div className="relative flex flex-col items-center">
                  {/* Image Previews */}
                  <div className="w-full h-60 border-2 border-dashed rounded-xl bg-white flex flex-wrap justify-center items-center space-x-4 space-y-4 p-4">
                    {/* Display uploaded images */}
                    {imagePreviews.length === 0 ? (
                      <div className="text-gray-400 text-3xl flex justify-center items-center flex-col space-y-4">
                        <LucideImagePlus
                          className="text-lightened-green"
                          size={80}
                        />
                        <Button className="bg-lightened-green text-white">
                          Upload Images
                        </Button>
                      </div>
                    ) : (
                      imagePreviews.map((preview, index) => (
                        <div key={index} className="relative w-32 h-32">
                          <img
                            src={preview}
                            alt={`Image Preview ${index + 1}`}
                            className="w-full h-full object-cover rounded-xl"
                          />
                          <button
                            type="button"
                            onClick={() => handleDeleteImage(index)}
                            className="absolute top-1 z-50 right-1 bg-red-500 border-2 border-white text-white rounded-full p-0.5 hover:bg-red-700 transition-all duration-200"
                          >
                            <LucideX size={16} />
                          </button>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Add Image Label */}
                  {imagePreviews.length > 0 && imagePreviews.length < 5 && (
                    <div className="mt-4">
                      <Button
                        onClick={() => fileInputRef.current?.click()}
                        className="bg-lightened-green text-white w-full"
                      >
                        Add Another Image
                      </Button>
                    </div>
                  )}

                  {/* <Controller
                    name="imageUrl"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        id="imageUrl"
                        type="file"
                        accept="image/*"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={handleImageChange}
                        ref={fileInputRef}
                        multiple
                      />
                    )}
                  /> */}

                  {/* File Input */}
                  {/* <Input
                    id="imageUrl"
                    type="file"
                    accept="image/*"
                    name="imageUrl"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleImageChange}
                    ref={fileInputRef}
                    multiple
                  /> */}

                  <Input
                    id="imageUrl"
                    type="file"
                    accept="image/*"
                    name="imageUrl" // Ensure this matches your form field's name
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleImageChange}
                    ref={fileInputRef}
                    multiple
                  />

                  {/* Error Message */}
                  <FormMessage className="text-red-500 text-sm mt-2">
                    {errors.imageUrl?.message}
                  </FormMessage>
                </div>
              </FormItem>
            </div>

            <div className="p-6 bg-white shadow-md rounded-md">
              <Label className="text-custom-green font-bold text-2xl ">
                Information
              </Label>

              {/* Title */}
              <FormItem className=" space-y-4 rounded-md mt-4">
                <FormLabel htmlFor="title">Title</FormLabel>
                <Input
                  id="title"
                  type="text"
                  {...register("title")}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
                <FormMessage className="text-red-500 text-sm">
                  {errors.title?.message}
                </FormMessage>
              </FormItem>

              {/* Description */}
              <FormItem className="space-y-4 rounded-md mt-4">
                <FormLabel htmlFor="description">Description</FormLabel>
                <Textarea
                  id="description"
                  {...register("description")}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
                <FormMessage className="text-red-500 text-sm">
                  {errors.description?.message}
                </FormMessage>
              </FormItem>

              {/* Location */}
              <FormItem className="space-y-4 rounded-md mt-4">
                <FormLabel htmlFor="location">Location</FormLabel>
                <Input
                  id="location"
                  type="text"
                  {...register("location")}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
                <FormMessage className="text-red-500 text-sm">
                  {errors.location?.message}
                </FormMessage>
              </FormItem>
            </div>

            <div className="p-6 bg-white shadow-md rounded-md border ">
              <Label className="text-custom-green font-bold text-2xl ">
                Price
              </Label>{" "}
              {/* Price */}
              <FormItem>
                <FormLabel htmlFor="price">Price</FormLabel>
                <Input
                  id="price"
                  type="number"
                  {...register("price", { valueAsNumber: true })}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
                <FormMessage className="text-red-500 text-sm">
                  {errors.price?.message}
                </FormMessage>
              </FormItem>
            </div>

            <div className="p-6 bg-white shadow-md rounded-md border ">
              <Label className="text-custom-green font-bold text-2xl ">
                Additional Info
              </Label>{" "}
              <div className="grid grid-cols-3 gap-4 my-4">
                {/* Property Type */}
                <FormItem>
                  <FormLabel>Property Type</FormLabel>
                  <Controller
                    name="propertyType"
                    control={control}
                    render={({ field }) => (
                      <Select {...field} onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Property Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Apartment">Apartment</SelectItem>
                          <SelectItem value="House">House</SelectItem>
                          <SelectItem value="Condo">Condo</SelectItem>
                          <SelectItem value="Land">Land</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  <FormMessage className="text-red-500 text-sm">
                    {errors.propertyType?.message}
                  </FormMessage>
                </FormItem>

                {/* Property Status */}
                <FormItem>
                  <FormLabel>Property Status</FormLabel>
                  <Controller
                    name="propertyStatus"
                    control={control}
                    render={({ field }) => (
                      <Select {...field} onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Property Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Rent">For Rent</SelectItem>
                          <SelectItem value="Sell">For Sale</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  <FormMessage className="text-red-500 text-sm">
                    {errors.propertyStatus?.message}
                  </FormMessage>
                </FormItem>

                {/* Property Size */}
                <FormItem>
                  <FormLabel htmlFor="size">Size (Square Footage)</FormLabel>
                  <Input
                    id="size"
                    type="number"
                    {...register("size", { valueAsNumber: true })}
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                  <FormMessage className="text-red-500 text-sm">
                    {errors.size?.message}
                  </FormMessage>
                </FormItem>

                {/* Number of Bedrooms */}
                <FormItem>
                  <FormLabel htmlFor="bedrooms">Number of Bedrooms</FormLabel>
                  <Input
                    id="bedrooms"
                    type="number"
                    {...register("bedrooms", { valueAsNumber: true })}
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                  <FormMessage className="text-red-500 text-sm">
                    {errors.bedrooms?.message}
                  </FormMessage>
                </FormItem>

                {/* Number of Bathrooms */}
                <FormItem>
                  <FormLabel htmlFor="bathrooms">Number of Bathrooms</FormLabel>
                  <Input
                    id="bathrooms"
                    type="number"
                    {...register("bathrooms", { valueAsNumber: true })}
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                  <FormMessage className="text-red-500 text-sm">
                    {errors.bathrooms?.message}
                  </FormMessage>
                </FormItem>

                {/* Garage */}
                <FormItem>
                  <FormLabel>Garage</FormLabel>
                  <Input
                    id="garage"
                    type="number"
                    {...register("garage", { valueAsNumber: true })}
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                  <FormMessage className="text-red-500 text-sm">
                    {errors.garage?.message}
                  </FormMessage>
                </FormItem>

                {/* Year Built */}
                <FormItem>
                  <FormLabel htmlFor="yearBuilt">Year Built</FormLabel>
                  <Input
                    id="yearBuilt"
                    type="number"
                    {...register("yearBuilt", { valueAsNumber: true })}
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                  <FormMessage className="text-red-500 text-sm">
                    {errors.yearBuilt?.message}
                  </FormMessage>
                </FormItem>

                {/* Energy Efficiency Rating */}
                <FormItem>
                  <FormLabel>Energy Efficiency</FormLabel>
                  <Controller
                    name="energyEfficiency"
                    control={control}
                    render={({ field }) => (
                      <Select {...field} onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Energy Efficiency Rating" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="A">A</SelectItem>
                          <SelectItem value="B">B</SelectItem>
                          <SelectItem value="C">C</SelectItem>
                          <SelectItem value="D">D</SelectItem>
                          <SelectItem value="E">E</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  <FormMessage className="text-red-500 text-sm">
                    {errors.energyEfficiency?.message}
                  </FormMessage>
                </FormItem>

                {/* Furnished */}
                <FormItem>
                  <FormLabel>Furnished Status</FormLabel>
                  <Controller
                    name="furnished"
                    control={control}
                    render={({ field }) => (
                      <Select {...field} onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Furnished Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Furnished">Furnished</SelectItem>
                          <SelectItem value="Unfurnished">
                            Unfurnished
                          </SelectItem>
                          <SelectItem value="Partially Furnished">
                            Partially Furnished
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  <FormMessage className="text-red-500 text-sm">
                    {errors.furnished?.message}
                  </FormMessage>
                </FormItem>
              </div>
            </div>

            <div className="p-6 bg-white shadow-md rounded-md border">
              {/* Amenities Section */}
              <div className="space-y-4">
                <FormLabel className="text-custom-green font-bold text-2xl">
                  Amenities
                </FormLabel>
                <div className="grid grid-cols-2 gap-4">
                  {amenitiesList.map((amenity) => (
                    <FormItem key={amenity}>
                      <div className="flex items-center space-x-2">
                        <Controller
                          name={`amenities.${amenity}`}
                          control={control}
                          render={({ field }) => (
                            <Checkbox
                              id={amenity}
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          )}
                        />
                        <Label htmlFor={amenity}>{amenity}</Label>
                      </div>
                      <FormMessage className="text-red-500 text-sm">
                        {errors.amenities?.[amenity]?.message as string}
                      </FormMessage>
                    </FormItem>
                  ))}
                </div>
              </div>
            </div>

            {/* Agent Contact Info Section */}
            <div className="p-6 bg-white shadow-md rounded-md border">
              <Label className="text-custom-green font-bold text-2xl ">
                Agent Contact Information
              </Label>

              {/* Agent Name */}
              <FormItem className="space-y-4 rounded-md mt-4">
                <FormLabel htmlFor="agentContactName">Agent Name</FormLabel>
                <Input
                  id="agentContactName"
                  type="text"
                  {...register("agentContactName")}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
                <FormMessage className="text-red-500 text-sm">
                  {errors.agentContactName?.message}
                </FormMessage>
              </FormItem>

              {/* Agent Email */}
              <FormItem className="space-y-4 rounded-md mt-4">
                <FormLabel htmlFor="agentContactEmail">Agent Email</FormLabel>
                <Input
                  id="agentContactEmail"
                  type="email"
                  {...register("agentContactEmail")}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
                <FormMessage className="text-red-500 text-sm">
                  {errors.agentContactEmail?.message}
                </FormMessage>
              </FormItem>

              {/* Agent Phone */}
              <FormItem className="space-y-4 rounded-md mt-4">
                <FormLabel htmlFor="agentContactPhone">Agent Phone</FormLabel>
                <Input
                  id="agentContactPhone"
                  type="text"
                  {...register("agentContactPhone")}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
                <FormMessage className="text-red-500 text-sm">
                  {errors.agentContactPhone?.message}
                </FormMessage>
              </FormItem>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-custom-green text-white py-3 rounded-md"
            >
              {isSubmitting ? "Submitting..." : "Submit Property"}
            </Button>
          </form>
        </div>
      </FormProvider>
    </div>
  );
};

export default AddPropertyForm;
