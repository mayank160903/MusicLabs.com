const { getCourseInfo } = require('../CoursesController');
const coursesSchema = require('../../models/course'); // Import the courses schema module



describe('getCourseInfo', () => {
  let req, res;

  beforeEach(() => {
    req = {
      params: {
        courseId: '65d278b7342ef66267b5bb9b', // Mock course ID
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
  });

  it('should fetch course information successfully', async () => {
    const mockCourse = {
      _id: '65d278b7342ef66267b5bb9b',
      title: 'Learn Tabla in 30 Days',
      teacher: [
        {
          _id: '65be546c84d6ea6bd025bac8',
          firstName: 'harshit',
          lastName: 'chauhan',
          email: 'charshit166@gmail.com',
          role: 'teacher',
          courses: [],
          isApproved: true,
          createdAt: '2024-02-03T14:57:48.561Z',
          updatedAt: '2024-02-03T14:58:19.598Z',
        }
      ],
      category: {
        _id: '65b6600ed7bf908fd609b895',
        name: 'Blues',
      },
      description: 'lorem ipsum dolor sit amet...',
      price: '1000',
      sections: [
        {
          _id: '65d278bd342ef66267b5bba0',
          name: 'Lets get Started',
          videos: [
            '65d27910342ef66267b5bbb5'
          ],
        },
        {
          _id: '65d278c0342ef66267b5bba5',
          name: '@nd class',
          videos: [
            '65d278e6342ef66267b5bbac',
            '65d27900342ef66267b5bbb1'
          ],
        }
      ],
      totalVideos: 0,
      ratings: 0,
      purchases: 2,
      quizes: [],
      createdAt: '2024-02-18T21:37:59.232Z',
      updatedAt: '2024-02-19T15:24:24.821Z',
      imageUrl: 'https://media.istockphoto.com/id/1397013109/photo/acoustic-guitar-against-blank-wooden-plank-panel-grunge-background-with-copy-space.webp?b=1&s=170667a&w=0&k=20&c=aF6f6l4m7LHYZrYXVfJt0CHvBaGq2kLRzejzYhYtkeY='
    };
    // Mock the behavior of coursesSchema.findById to resolve with mockCourse
    coursesSchema.findById.mockResolvedValue(mockCourse);

    // Simulate calling the getCourseInfo function
    await getCourseInfo(req, res);

    // Assertions for successful data retrieval
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      success: true,
      message: 'Course fetched successfully',
      course: mockCourse,
    });
    expect(coursesSchema.findById).toHaveBeenCalledWith('65d278b7342ef66267b5bb9b');
  });

  it('should handle course not found', async () => {
    // Mock the behavior of coursesSchema.findById to resolve with null (course not found)
    coursesSchema.findById.mockResolvedValue(null);

    // Simulate calling the getCourseInfo function
    await getCourseInfo(req, res);

    // Assertions for course not found
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({
      success: false,
      message: 'Course not found',
    });
    expect(coursesSchema.findById).toHaveBeenCalledWith('65d278b7342ef66267b5bb9b');
  });

  it('should handle error while fetching course information', async () => {
    const mockError = new Error('Database error');

    // Mock the behavior of coursesSchema.findById to reject with an error
    coursesSchema.findById.mockRejectedValue(mockError);

    // Simulate calling the getCourseInfo function
    await getCourseInfo(req, res);

    // Assertions for error handling
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith({
      success: false,
      message: 'Error while fetching course',
    });
    expect(console.log).toHaveBeenCalledWith(mockError); // Ensure error is logged
  });
});
