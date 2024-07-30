import React, { useState } from "react";

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
    if (fieldError) return "border-red-500 border-2";
    if (fieldValue) return "border-green-500 border-2";
    return "border-gray-300 border-2";
  };

  return (
    <div
      className={`${
        sidebarToggle ? "ml-16" : "ml-64"
      } flex-1 flex items-center justify-center transition-all duration-300 ease-in-out min-h-screen`}
    >
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
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
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
                className="mr-2"
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
                className="mr-2"
              />
              Female
            </label>
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
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
