const axios = require('axios');

// Test PATCH request to update university
async function testUpdateUniversity() {
  try {
    const response = await axios.patch('http://localhost:3000/user/update-university/1', {
      universityId: 2
    });
    console.log('Response data:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

// Test PATCH request to update subjects
async function testUpdateSubjects() {
  try {
    const response = await axios.patch('http://localhost:3000/user/update-subjects/1', {
      subjects: ['Math', 'IT', 'Biology']
    });
    console.log('Response data:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

testUpdateUniversity();
testUpdateSubjects();
