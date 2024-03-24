import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CustomAppbar from "../../components/appbar/CustomAppbar";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { useState } from "react";
import { addBlog } from "../../store/blog/Blog.Action";

const AddBlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
  });
  const blogDispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.blog);

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    blogDispatch(addBlog(formData));
  };

  return (
    <>
      <CustomAppbar />
      <Container maxWidth="sm" sx={{ height: "calc(100vh - 70px)" }}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ height: "100%" }}
        >
          <Box alignItems="center" justifyContent="center">
            <Paper sx={{ padding: "10px" }}>
              <Typography textAlign={"center"} variant="h4" mb={2}>
                Add Blog
              </Typography>
              <form autoComplete="off" onSubmit={handleFormSubmit}>
                <TextField
                  label="Title"
                  required
                  type="text"
                  sx={{ mb: 3 }}
                  fullWidth
                  value={formData?.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
                <FormControl fullWidth sx={{ marginBottom: 3 }}>
                  <InputLabel>Category</InputLabel>
                  <Select
                    label="category"
                    value={formData?.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    required
                  >
                    {categories?.map((value, index) => {
                      return (
                        <MenuItem value={value} key={index}>
                          {value}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                <TextField
                  label="Description"
                  required
                  type="text"
                  sx={{ mb: 3 }}
                  fullWidth
                  multiline
                  rows={7}
                  value={formData?.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </form>
            </Paper>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default AddBlogForm;
