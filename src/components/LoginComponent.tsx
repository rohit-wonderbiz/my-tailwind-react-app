import React, { useState } from "react";

interface NavbarProps {
  sidebarToggle: boolean;
  setSidebarToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginComponent: React.FC<NavbarProps> = ({
  sidebarToggle,
  setSidebarToggle,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [education, setEducation] = useState("");
  const [languages, setLanguages] = useState<string[]>([]);
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    education: "",
    languages: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const isAlphabetic = (value: string) => /^[A-Za-z]+$/.test(value);

  const validateFirstName = (value: string) => {
    let error = "";
    if (!value) {
      error = "First name is required.";
    } else if (value.length < 3) {
      error = "First name must be at least 3 characters.";
    } else if (!isAlphabetic(value)) {
      error = "First name must contain only alphabetic characters.";
    }
    setErrors((prevErrors) => ({ ...prevErrors, firstName: error }));
  };

  const validateLastName = (value: string) => {
    let error = "";
    if (!value) {
      error = "Last name is required.";
    } else if (value.length < 3) {
      error = "Last name must be at least 3 characters.";
    } else if (!isAlphabetic(value)) {
      error = "Last name must contain only alphabetic characters.";
    }
    setErrors((prevErrors) => ({ ...prevErrors, lastName: error }));
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let error = "";
    if (!value || !emailRegex.test(value)) {
      error = "Invalid email address.";
    }
    setErrors((prevErrors) => ({ ...prevErrors, email: error }));
  };

  const validateForm = () => {
    let formErrors = {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      education: "",
      languages: "",
    };

    if (!firstName) {
      formErrors.firstName = "First name is required.";
    } else if (firstName.length < 3) {
      formErrors.firstName = "First name must be at least 3 characters.";
    } else if (!isAlphabetic(firstName)) {
      formErrors.firstName =
        "First name must contain only alphabetic characters.";
    }

    if (!lastName) {
      formErrors.lastName = "Last name is required.";
    } else if (lastName.length < 3) {
      formErrors.lastName = "Last name must be at least 3 characters.";
    } else if (!isAlphabetic(lastName)) {
      formErrors.lastName =
        "Last name must contain only alphabetic characters.";
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
      console.log(firstName, lastName, gender, email, education, languages);
      setShowPopup(false);
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

  const getInputBorderColor = (fieldValue: string, fieldError: string) => {
    if (fieldError) return "border-red-500";
    if (fieldValue) return "border-green-500";
    return "border-gray-300";
  };

  return (
    <div
      className={`${
        sidebarToggle ? "ml-8" : "ml-8"
      } mr-16 flex-1 flex items-center justify-center transition-all duration-300 ease-in-out min-h-screen`}
    >
      <form
        className="w-full p-8 bg-gray-100 shadow-lg rounded-lg border-2"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <h1 className="text-center text-2xl font-bold text-blue-600 sm:text-3xl mb-6">
          Employee Form
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your First Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                validateFirstName(e.target.value);
              }}
              onBlur={(e) => validateFirstName(e.target.value)}
              className={`shadow appearance-none border ${getInputBorderColor(
                firstName,
                errors.firstName
              )} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-2">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                validateLastName(e.target.value);
              }}
              onBlur={(e) => validateLastName(e.target.value)}
              className={`shadow appearance-none border ${getInputBorderColor(
                lastName,
                errors.lastName
              )} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-2">{errors.lastName}</p>
            )}
          </div>
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
              validateEmail(e.target.value);
            }}
            onBlur={(e) => validateEmail(e.target.value)}
            className={`shadow appearance-none border ${getInputBorderColor(
              email,
              errors.email
            )} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600`}
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
                className={`block w-full cursor-pointer shadow rounded-lg border p-3 text-gray-800 hover:border-gray-800 ${
                  gender === "male"
                    ? "border-blue-600 bg-blue-600 text-white"
                    : ""
                }`}
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
                className={`block w-full cursor-pointer shadow rounded-lg border p-3 text-gray-800 hover:border-gray-800 ${
                  gender === "female"
                    ? "border-blue-600 bg-blue-600 text-white"
                    : ""
                }`}
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
            <div>
              <label
                className={`block w-full cursor-pointer shadow rounded-lg border p-3 text-gray-800 hover:border-gray-800 ${
                  gender === "other"
                    ? "border-blue-600 bg-blue-600 text-white"
                    : ""
                }`}
              >
                <input
                  className="sr-only"
                  type="radio"
                  name="gender"
                  value="other"
                  checked={gender === "other"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <span className="text-sm"> Other </span>
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
            )} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600`}
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
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>

      {showPopup && (
        <aside className="fixed top-10 right-4 z-50 flex items-center justify-center gap-4 rounded-lg bg-red-600 px-5 py-3 text-white">
          <span className="text-sm font-medium">
            All fields need to be filled
          </span>

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
