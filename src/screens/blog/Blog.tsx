import { Container } from "@mui/material";
import CustomAppbar from "../../components/appbar/CustomAppbar";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useEffect } from "react";
import { getBlogs } from "../../store/blog/Blog.Action";
import BlogCard from "../../components/card/BlogCard";

const Blog = () => {
  const blogDispatch = useAppDispatch();
  const { blogs } = useAppSelector((state) => state.blog);

  useEffect(() => {
    blogDispatch(getBlogs());
  }, []);

  return (
    <>
      <CustomAppbar />
      <Container
        sx={{ height: "calc(100vh - 70px)", pt: "40px", overflowY: "auto" }}
      >
        {blogs?.data?.map((data: any, index: number) => {
          return <BlogCard data={data} key={index} />;
        })}
      </Container>
    </>
  );
};

export default Blog;
