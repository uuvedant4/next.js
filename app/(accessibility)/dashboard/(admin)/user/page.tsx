const session = null;

function User({}) {
  if (!session) {
    throw new Error("Failed");
  }
  return <div>User Profile</div>;
}

export default User;
