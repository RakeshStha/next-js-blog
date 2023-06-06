import { useRef } from "react";

function BlogForm(props) {
  const { addBlogHandler } = props;

  const titleRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();
  const detailsRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const formData = {
      image: imageRef.current.value,
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      details: detailsRef.current.value,
    };
    addBlogHandler(formData);
  };

  return (
    <form className="max-w-lg w-full mx-auto" onSubmit={formSubmitHandler}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <label className="block uppercase -tracking-wide text-gray-700 text-xs font-bold mb-2">
          Title
        </label>
        <input
          className="appearance-none block w-full border border-gray-300 text-grey-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="title"
          ref={titleRef}
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <label className="block uppercase -tracking-wide  text-gray-700 text-xs font-bold mb-2">
          Image
        </label>
        <input
          className="appearance-none block w-full bg-grey-200 border border-gray-300 text-grey-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="image"
          ref={imageRef}
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <label className="block uppercase -tracking-wide text-gray-700 text-xs font-bold mb-2">
          Description
        </label>
        <input
          className="appearance-none block w-full bg-grey-200 border border-gray-300 text-grey-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="description"
          ref={descriptionRef}
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <label className="block uppercase -tracking-wide text-gray-700 text-xs font-bold mb-2">
          Details
        </label>
        <input
          className="appearance-none block w-full bg-grey-200 border border-gray-300 text-grey-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="details"
          ref={detailsRef}
        />
      </div>
      <button className="px-4 py-2 my-1 font-semibold text-red-700 bg-transparent border border-red-500 rounded hover:bg-red-500 hover:text-white hover:border-transparent">
        Submit
      </button>
    </form>
  );
}

export default BlogForm;
