import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AxiosInstance } from "../api/axiosInstance";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password", "");

  const [roles, setRoles] = useState([]);
  const [selectedRoleID, setSelectedRoleID] = useState("");

  useEffect(() => {
    AxiosInstance.get("/roles")
      .then((response) => {
        setRoles(response.data);
        //console.log(response.data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleRoleChange = (e) => {
    setSelectedRoleID(e.target.value);
    // console.log(selectedRoleID);
  };

  const submitForm = (data) => {
    let formData;
    if (selectedRoleID === "2") {
      formData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: data.role_id,
        store: {
          name: data.storeName,
          phone: data.storePhone,
          tax_no: data.tax_no,
          bank_account: data.bank_account,
        },
      };
    } else {
      formData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: data.role_id,
      };
    }

    console.log("data", data);
    console.log("Form data", formData);

    AxiosInstance.post("/signup", formData)
      .then((response) => {
        console.log("submit succeeded:", response);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div className="flex font-bold gap-10">
      <form
        className="flex flex-col w-full items-start gap-4 text-secondtext"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="flex flex-col w-full gap-1">
          <label className="label">
            Name / Surname
            <input
              className="input"
              type="text"
              name="name"
              {...register("name", {
                required: "Name is required.",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters long!",
                },
              })}
            ></input>
          </label>
          <div className="error">{errors?.name?.message}</div>
        </div>
        <div className="flex flex-col w-full gap-1">
          <label className="label">
            Email
            <input
              className="input"
              type="email"
              name="email"
              {...register("email", {
                required: "Email is required.",
              })}
            ></input>
          </label>
          <div className="error">{errors?.email?.message}</div>
        </div>
        <div className="flex flex-col w-full gap-1">
          <label className="label">
            Password
            <input
              className="input"
              type="password"
              name="password"
              value={password}
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long.",
                },
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
                  message:
                    "Password must include numbers, lowercase letters, uppercase letters, and special characters.",
                },
              })}
            ></input>
          </label>
          <div className="error">{errors?.password?.message}</div>
        </div>
        <div className="flex flex-col w-full gap-1">
          <label className="label">
            Retype Password
            <input
              className="input"
              type="password"
              name="confirmPassword"
              {...register("confirmPassword", {
                required: "Please confirm your password.",
                validate: (value) =>
                  value === password || "Passwords do not match.",
              })}
            ></input>
          </label>
          <div className="error">{errors?.confirmPassword?.message}</div>
        </div>
        <div className="flex flex-col w-full gap-1">
          <label className="label">
            Role
            <select
              {...register("role_id", { required: "Role is required." })}
              className="input"
              name="role_id"
              onChange={handleRoleChange}
            >
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
            <div className="error">{errors?.role_id?.message}</div>
          </label>
        </div>
        {selectedRoleID === "2" && (
          <>
            <div className="flex flex-col w-full gap-1">
              <label className="label">
                Store Name
                <input
                  className="input"
                  type="text"
                  name="storeName"
                  {...register("storeName", {
                    required: "Store Name is required.",
                    minLength: {
                      value: 3,
                      message: "Store Name must be at least 3 characters long.",
                    },
                  })}
                />
              </label>
              <div className="error">{errors?.storeName?.message}</div>
            </div>
            <div className="flex flex-col w-full gap-1">
              <label className="label">
                Store Phone
                <input
                  className="input"
                  type="tel"
                  name="storePhone"
                  {...register("storePhone", {
                    required: "Store Phone is required.",
                    pattern: {
                      value: /^(\+90\s?)?(\d{10})$/,
                      message: "Invalid Türkiye phone number.",
                    },
                  })}
                />
              </label>
              <div className="error">{errors?.storePhone?.message}</div>
            </div>
            <div className="flex flex-col w-full gap-1">
              <label className="label">
                Store Tax ID
                <input
                  className="input"
                  type="text"
                  name="tax_no"
                  {...register("tax_no", {
                    required: "Store Tax ID is required.",
                    pattern: {
                      value: /^T\d{4}V\d{6}$/,
                      message:
                        "Invalid Store Tax ID. It should match the pattern 'TXXXXVXXXXXX'.",
                    },
                  })}
                />
              </label>
              <div className="error">{errors?.tax_no?.message}</div>
            </div>
            <div className="flex flex-col w-full gap-1">
              <label className="label">
                Store Bank Account
                <input
                  className="input"
                  type="text"
                  name="bank_account"
                  {...register("bank_account", {
                    required: "Store Bank Account is required.",
                    pattern: {
                      value: /^TR\d{2}\d{4}\d{4}\d{4}\d{4}\d{4}\d{2}$/,
                      message:
                        "Invalid IBAN. It should match the pattern 'TRXXXXXXXXXXXXXXXXXXXXXXXX'.",
                    },
                  })}
                />
              </label>
              <div className="error">{errors?.bank_account?.message}</div>
            </div>
          </>
        )}
        <button className="flex justify-center self-center bg-shineblack text-white w-min px-4 py-2 rounded active:scale-95">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
