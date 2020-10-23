// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  res.json({
    name: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet rhoncus tortor vitae consectetur. Aliquam ut nibh et leo pulvinar tempor ut sit amet risus.",
  });
};
