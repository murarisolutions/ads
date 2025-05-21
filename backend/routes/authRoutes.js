import express from 'express';

const router = express.Router();

router.get('/main/frontend/src/components/services/Consulting/Consulting.jsx', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    

    res.status(200).json({ message: 'Form data saved successfully!' });
  } catch (error) {
    res.status(400).json({ error: 'Error saving form data' });
  }
});

export default router;
