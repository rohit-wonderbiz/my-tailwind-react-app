import React, { useState, useEffect } from "react";

interface NavbarProps {
  sidebarToggle: boolean;
  setSidebarToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginComponent: React.FC<NavbarProps> = ({
  sidebarToggle,
  setSidebarToggle,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [education, setEducation] = useState("");
  const [languages, setLanguages] = useState<string[]>([]);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    gender: "",
    education: "",
    languages: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const validateForm = () => {
    let formErrors = {
      name: "",
      email: "",
      gender: "",
      education: "",
      languages: "",
    };

    if (!name) {
      formErrors.name = "Name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      formErrors.email = "Invalid email address.";
    }

    if (!gender) {
      formErrors.gender = "Gender is required.";
    }

    if (!education) {
      formErrors.education = "Education is required.";
    }

    if (languages.length === 0) {
      formErrors.languages = "At least one language must be selected.";
    }

    setErrors(formErrors);

    return Object.values(formErrors).every((error) => error === "");
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      console.log(name, gender, email, education, languages);
    } else {
      setShowPopup(true);
    }
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLanguages((prevLanguages) =>
      prevLanguages.includes(value)
        ? prevLanguages.filter((language) => language !== value)
        : [...prevLanguages, value]
    );
  };

  const validateName = () => {
    if (!name) {
      setErrors((prevErrors) => ({ ...prevErrors, name: "Name is required." }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };

  const getInputBorderColor = (fieldValue: string, fieldError: string) => {
    if (fieldError) return "border-red-500 border-2";
    if (fieldValue) return "border-green-500 border-2";
    return "border-gray-300 border-2";
  };

  return (
    <div
      className={`${
        sidebarToggle ? "ml-16" : "ml-32"
      } mr-16 flex-1 flex items-center justify-center transition-all duration-300 ease-in-out min-h-screen`}
    >
      <form className="w-full" onSubmit={handleSubmit} autoComplete="off">
        <h1 className="text-center p-8 text-2xl font-bold text-blue-600 sm:text-3xl">
          Employee Form
        </h1>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              validateName();
            }}
            onBlur={validateName}
            className={`shadow appearance-none border ${getInputBorderColor(
              name,
              errors.name
            )} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-2">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail();
            }}
            onBlur={validateEmail}
            className={`shadow appearance-none border ${getInputBorderColor(
              email,
              errors.email
            )} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-2">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Gender
          </label>
          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div>
              <label
                className="block w-full cursor-pointer shadow rounded-lg border p-3 text-gray-800 hover:border-gray-800 has-[:checked]:border-blue-600 has-[:checked]:bg-blue-600 has-[:checked]:text-white"
                tabIndex={0}
              >
                <input
                  className="sr-only"
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <span className="text-sm"> Male </span>
              </label>
            </div>

            <div>
              <label
                className="block w-full cursor-pointer shadow rounded-lg border p-3 text-gray-800 hover:border-gray-800 has-[:checked]:border-blue-600 has-[:checked]:bg-blue-600 has-[:checked]:text-white"
                tabIndex={0}
              >
                <input
                  className="sr-only"
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <span className="text-sm"> Female </span>
              </label>
            </div>
          </div>
          {errors.gender && (
            <p className="text-red-500 text-xs mt-2">{errors.gender}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="education"
          >
            Education
          </label>
          <select
            id="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            className={`shadow border ${getInputBorderColor(
              education,
              errors.education
            )} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          >
            <option value="">Select</option>
            <option value="hsc">HSC</option>
            <option value="ssc">SSC</option>
          </select>
          {errors.education && (
            <p className="text-red-500 text-xs mt-2">{errors.education}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Languages
          </label>
          <div>
            <label className="block">
              <input
                type="checkbox"
                name="languages"
                value="python"
                checked={languages.includes("python")}
                onChange={handleLanguageChange}
                className="mr-2"
              />
              Python
            </label>
            <label className="block">
              <input
                type="checkbox"
                name="languages"
                value="c++"
                checked={languages.includes("c++")}
                onChange={handleLanguageChange}
                className="mr-2"
              />
              C++
            </label>
            <label className="block">
              <input
                type="checkbox"
                name="languages"
                value="javascript"
                checked={languages.includes("javascript")}
                onChange={handleLanguageChange}
                className="mr-2"
              />
              JavaScript
            </label>
          </div>
          {errors.languages && (
            <p className="text-red-500 text-xs mt-2">{errors.languages}</p>
          )}
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>

      {showPopup && (
        <aside className="fixed top-4 right-4 z-50 flex items-center justify-center gap-4 rounded-lg bg-red-600 px-5 py-3 text-white">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium hover:opacity-75"
          >
            All fields need to be filled
          </a>

          <button
            className="rounded bg-white/20 p-1 hover:bg-white/10"
            onClick={() => setShowPopup(false)}
          >
            <span className="sr-only">Close</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </aside>
      )}
    </div>
  );
};

export default LoginComponent;
