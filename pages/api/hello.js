// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  console.log("This is test console");
  res.status(200).json({ name: "John Doe" });
};
