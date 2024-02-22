import react, { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

const Purchases = () => {
  const theme = useTheme();
  const [teachers, setTeachers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/admin/teacheruniversalSearch?query=${searchQuery}`
        );
        setTeachers(response.data.teachers);
        console.log(teachers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <>
      <h1>This is purchases page</h1>

      <TableContainer
        component={Paper}
        sx={{
          marginTop: theme.spacing(4),
          backgroundColor: "#1d2634",
          marginBottom: 5,
        }}
      >
        <Table sx={{ color: "white" }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ fontSize: "5xl", fontWeight: "bolder", color: "white" }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{ fontSize: "3xl", fontWeight: "bolder", color: "white" }}
              >
                Email
              </TableCell>
              <TableCell
                sx={{ fontSize: "3xl", fontWeight: "bolder", color: "white" }}
              >
                Master's
              </TableCell>
              <TableCell
                sx={{ fontSize: "3xl", fontWeight: "bolder", color: "white" }}
              >
                Experience
              </TableCell>
              <TableCell
                sx={{ fontSize: "3xl", fontWeight: "bolder", color: "white" }}
              >
                View Profile
              </TableCell>
              <TableCell
                sx={{ fontSize: "3xl", fontWeight: "bolder", color: "white" }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.map((teacher) => (
              <TableRow key={teacher._id}>
                {/* <TableCell sx={{ color: 'white' }}>{teacher.firstName}&nbsp;{teacher.lastName}</TableCell> */}
                <TableCell sx={{ color: "white" }}>
                  {teacher.fullname
                    ? teacher.fullname
                    : `${teacher.firstName} ${teacher.lastName}`}
                </TableCell>
                <TableCell sx={{ color: "white" }}>{teacher.email}</TableCell>
                {/* <TableCell sx={{ color: 'white' }}>{teacher.master}</TableCell> */}
                <TableCell sx={{ color: "white" }}>
                  {teacher.master ? teacher.master : "Not done"}
                </TableCell>
                {/* <TableCell sx={{ color: 'white' }}>{teacher.experience}</TableCell> */}
                <TableCell sx={{ color: "white" }}>
                  {teacher.experience ? teacher.experience : "Not experience"}
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      "&:hover": {
                        color: "white",
                        backgroundColor: "#3b82f6",
                      },
                    }}
                    onClick={() => handleViewProfile(teacher._id)}
                  >
                    View Profile
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      "&:hover": {
                        color: "white",
                        backgroundColor: "#ef4444",
                      },
                    }}
                    onClick={() => handleViewProfile(teacher._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Purchases;
