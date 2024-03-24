import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import moment from "moment";

interface myProps {
  data: any;
}

const BlogCard = ({ data }: myProps) => {
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
