import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import CustomAppbar from "../../components/appbar/CustomAppbar";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useEffect, useState } from "react";
import { getBlogs } from "../../store/blog/Blog.Action";
import BlogCard from "../../components/card/BlogCard";

const Blog = () => {
  const blogDispatch = useAppDispatch();
  const { blogs } = useAppSelector((state) => state.blog);
  const [filteredList, setFilteredList] = useState<any[]>([]);
  const [dateSort, setDateSort] = useState("none");

  useEffect(() => {
    if (!blogs?.data?.length) {
      blogDispatch(getBlogs());
    }

    setFilteredList(blogs?.data);
  }, [blogs]);

  const searchHandle = (event: any) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredList = blogs?.data?.filter((blog: any) => {
      return blog.title.toLowerCase().includes(searchTerm);
    });

    setFilteredList(filteredList);
  };

  const handleDateSort = (event: any) => {
    let sortedList = [...filteredList];

    if (event.target.value === "ascending") {
      sortedList?.sort(
        (a: any, b: any) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    }
    if (event.target.value === "decending") {
      sortedList?.sort(
        (a: any, b: any) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }

    setFilteredList(sortedList);
    setDateSort(event.target.value);
  };

  return (
    <>
      <CustomAppbar />

      <Container
        sx={{ height: "calc(100vh - 70px)", pt: "40px", overflowY: "auto" }}
      >
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={8}>
            <TextField
              variant="standard"
              label="Search"
              fullWidth
              onChange={searchHandle}
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth variant="standard">
              <InputLabel>Sort By Date</InputLabel>
              <Select value={dateSort} onChange={handleDateSort}>
                <MenuItem value={"none"}>None</MenuItem>
                <MenuItem value={"ascending"}>Ascending</MenuItem>
                <MenuItem value={"decending"}>Decending</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {filteredList?.map((data: any, index: number) => {
          return <BlogCard data={data} key={index} />;
        })}
      </Container>
    </>
  );
};

export default Blog;
