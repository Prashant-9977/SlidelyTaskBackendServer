import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();
const port = 3000;

app.use(bodyParser.json());

interface Submission {
  name: string;
  email: string;
  phone: string;
  github_link: string;
  stopwatch_time: string;
}

let submissions: Submission[] = [];

// Load submissions from db.json
const loadSubmissions = () => {
  if (fs.existsSync('db.json')) {
    const data = fs.readFileSync('db.json', 'utf8');
    submissions = JSON.parse(data);
  }
};

// Save submissions to db.json
const saveSubmissions = () => {
  fs.writeFileSync('db.json', JSON.stringify(submissions, null, 2));
};

app.get('/ping', (req: Request, res: Response) => {
  res.json(true);
});

app.post('/submit', (req: Request, res: Response) => {
  const submission: Submission = req.body;
  submissions.push(submission);
  saveSubmissions();
  res.json({ message: 'Submission saved successfully' });
});

app.get('/read', (req: Request, res: Response) => {
  const index = parseInt(req.query.index as string);
  if (index >= 0 && index < submissions.length) {
    res.json(submissions[index]);
  } else {
    res.status(404).json({ message: 'Submission not found' });
  }
});

app.listen(port, () => {
  loadSubmissions();
  console.log(`Server running at http://localhost:${port}`);
});
