import { Container } from "@mui/material";
import CustomAppbar from "../../components/appbar/CustomAppbar";
import { useAppDispatch, useAppSelector } from "../../store/store";
import BlogCard from "../../components/card/BlogCard";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getUserBlogs } from "../../store/blog/Blog.Action";

const UserBlog = () => {
  const { state } = useLocation();
  const blogDispatch = useAppDispatch();
  const { blogs } = useAppSelector((state) => state.blog);

  useEffect(() => {
    blogDispatch(getUserBlogs({}));
  }, []);
  return (
    <>
      <CustomAppbar />
      <Container
        sx={{ height: "calc(100vh - 70px)", pt: "40px", overflowY: "auto" }}
      >
        {blogs?.data?.map((data: any, index: number) => {
          return <BlogCard data={data} key={index} user={state.user} />;
        })}
      </Container>
    </>
  );
};

export default UserBlog;
