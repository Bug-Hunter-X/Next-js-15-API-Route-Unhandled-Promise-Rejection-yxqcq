```javascript
// pages/api/dataSolution.js
export default async function handler(req, res) {
  try {
    const data = await fetchData();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data: ' + error.message });
  }
}

async function fetchData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  throw new Error('Failed to fetch data from the database');
}
```