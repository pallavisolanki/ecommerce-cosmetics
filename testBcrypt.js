const bcrypt = require('bcryptjs');

const runTest = async () => {
  const password = "pallavi07"; // Original Password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  console.log("Original Password:", password);
  console.log("Generated Hash:", hash);

  const isMatch = await bcrypt.compare(password, hash);
  console.log("Password Match:", isMatch); // EXPECTED OUTPUT: true
};

runTest();
