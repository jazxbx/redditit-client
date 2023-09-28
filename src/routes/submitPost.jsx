import Button from "../components/Button";

function SubmitPost() {
  return (
    <div className="mt-16 flex justify-center">
      <div className="max-w-screen-md">
        <h1 className="text-start">Create a post</h1>
        <select className="my-2 rounded-lg border border-gray-300 p-2">
          <option selected disabled>
            Choose a community
          </option>
        </select>
        <div className="mt-5">
          <form action="">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Title"
                className="rounded-lg border border-gray-300 p-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Text"
                className="h-24 w-full rounded-lg border border-gray-300 p-2 focus:outline-none"
              />
            </div>
            <Button>Post</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SubmitPost;
