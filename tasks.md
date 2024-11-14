# Fork from https://stackblitz.com/~/github.com/MrKotov/web-dev-2024-express

1. Create `/univertsity` ednpoints with GET, POST and DELETE Methods
1. Each User must have an University as part of their JSON Structure e.g. `{ id: 2, name: 'Jane Smith', email: 'jane@example.com', universityId: 1 }` or   `{ id: 2, name: 'Jane Smith', email: 'jane@example.com', university: { id: 1, name: 'TU-Sofia'} }`
1. Add `PATCH` `user/update-university`, request in User to update the university. Pass `{ universityId: 3 }` in body.
1. Add an array to User called `subjects` containing string elements. Add patch request for updating the `subjects` array `subjects: ['maths, 'IT', 'Bio']`
1. To test the `POST`, `PATCH` requests 
    1. Open new terminal with "+"
    1. Change the contents to reflect the body and url of the request
    1. Run `node test-patch.js`