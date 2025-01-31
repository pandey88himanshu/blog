import React, { useEffect } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import slugify from "slugify";
import { showToast } from "@/helpers/showToast";
import { getEvn } from "@/helpers/getEnv";
import { useParams } from "react-router-dom";
import { useFetch } from "@/hooks/useFetch";

const EditCategory = () => {
  const { category_id } = useParams();

  // Retrieve the token from localStorage (or cookies, if you're storing it there)
  const token = localStorage.getItem("token");

  // Fetch the category data with the Authorization header
  const {
    data: categoryData,
    loading,
    error,
  } = useFetch(
    `${getEvn("VITE_API_BASE_URL")}/category/show/${category_id}`,
    {
      method: "get",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the header
      },
    },
    [category_id]
  );

  const formSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long."),
    slug: z.string().min(3, "Slug must be at least 3 characters long."),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      slug: "",
    },
  });

  const categoryName = form.watch("name");

  useEffect(() => {
    if (categoryName) {
      const slug = slugify(categoryName, { lower: true });
      form.setValue("slug", slug);
    }
  }, [categoryName]);

  useEffect(() => {
    if (categoryData) {
      form.setValue("name", categoryData.category.name);
      form.setValue("slug", categoryData.category.slug);
    }
  }, [categoryData]);

  async function onSubmit(values) {
    try {
      const response = await fetch(
        `${getEvn("VITE_API_BASE_URL")}/category/update/${category_id}`,
        {
          method: "put",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`, // Include the token in the header
          },
          body: JSON.stringify(values),
        }
      );

      // Handle response and display success/error message
      const data = await response.json();

      if (!response.ok) {
        if (response.status === 403) {
          return showToast(
            "error",
            "You do not have permission to update this category."
          );
        }
        return showToast("error", data.message);
      }

      showToast("success", data.message);
    } catch (error) {
      showToast("error", error.message);
    }
  }

  return (
    <div>
      <Card className='pt-5 max-w-screen-md mx-auto'>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className='mb-3'>
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder='Enter category name' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-3'>
                <FormField
                  control={form.control}
                  name='slug'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Slug</FormLabel>
                      <FormControl>
                        <Input placeholder='Slug' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type='submit' className='w-full'>
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditCategory;
