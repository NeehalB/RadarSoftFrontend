import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import moment from "moment";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/store";
import { deleteUserBlog, getUserBlogs } from "../../store/blog/Blog.Action";

interface myProps {
  data: any;
  user?: boolean;
}

const BlogCard = ({ data, user }: myProps) => {
  const navigate = useNavigate();
  const blogDispatch = useAppDispatch();
  return (
    <Card sx={{ minWidth: 345, mb: "20px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <AccountCircleIcon />
          </Avatar>
        }
        title={data?.title}
        subheader={
          <div>
            <Typography fontSize={14}>
              {moment(data?.createdAt).format("MMMM DD, YYYY hh:mma")}
            </Typography>
            <Typography fontSize={14}>{data?.email}</Typography>
          </div>
        }
        action={
          user && (
            <>
              <IconButton
                onClick={() => {
                  navigate("/add_blog", { state: { id: data?._id } });
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  blogDispatch(deleteUserBlog({ id: data?._id })).then(() => {
                    blogDispatch(getUserBlogs({}));
                  });
                }}
              >
                <DeleteIcon />
              </IconButton>
            </>
          )
        }
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary" mb={1}>
          Category: {data?.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data?.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
