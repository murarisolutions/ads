// const sendNotificationEmail = require('./mailer'); // Add this line at the top

// const resolvers = {
//   Query: {
//     enrollments: async () => await Enrollment.find(),
//   },
//   Mutation: {
//     addEnrollment: async (_, { name, email, phone, message }) => {
//       const newEnrollment = new Enrollment({ name, email, phone, message });
//       await newEnrollment.save();
//       sendNotificationEmail({ name, email, phone, message }); // Send email notification
//       return newEnrollment;
//     },
//   },
// };
