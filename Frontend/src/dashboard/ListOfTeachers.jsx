import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const ListOfTeachers = () => {
  const theme = useTheme();
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/admin/allteachers');
        setTeachers(response.data.teachers);
        console.log(teachers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (


    <>
       <div className="flex justify-center">
      <div className="bg-gray-200 rounded-full px-2 mt-5 mb-4">
         <h1 className="font-bold text-4xl text-black">List of Teachers</h1>
      </div>
    </div>

    <TableContainer component={Paper} sx={{ marginTop: theme.spacing(4), backgroundColor: '#1d2634', marginBottom: 5 }}>
      <Table sx={{ color: 'white' }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: '5xl', fontWeight: 'bolder' , color: 'white' }}>Name</TableCell>
            <TableCell sx={{ fontSize: '3xl', fontWeight: 'bolder' , color: 'white' }}>Email</TableCell>
            <TableCell sx={{ fontSize: '3xl', fontWeight: 'bolder' , color: 'white' }}>Master's</TableCell>
            <TableCell sx={{ fontSize: '3xl', fontWeight: 'bolder' , color: 'white' }}>Experience</TableCell>
            <TableCell sx={{ fontSize: '3xl', fontWeight: 'bolder' , color: 'white' }}>View Profile</TableCell>
            <TableCell sx={{ fontSize: '3xl', fontWeight: 'bolder' , color: 'white' }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teachers.map((teacher) => (
            <TableRow key={teacher._id}>
              <TableCell sx={{ color: 'white' }}>{teacher.firstName}&nbsp;{teacher.lastName}</TableCell>
              <TableCell sx={{ color: 'white' }}>{teacher.email}</TableCell>
              <TableCell sx={{ color: 'white' }}>{teacher.master}</TableCell>
              <TableCell sx={{ color: 'white' }}>{teacher.experience}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
              '&:hover': {
                color: 'white',
                backgroundColor: '#3b82f6', 
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
              '&:hover': {
                color: 'white',
                backgroundColor: '#ef4444',
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

export default ListOfTeachers;

