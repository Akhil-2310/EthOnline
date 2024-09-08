import React, { useState } from "react";
import { ApiSdk } from "@bandada/api-sdk"; // Import the Bandada API SDK
import { useNavigate } from "react-router-dom";

const CreateGroup = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [restriction, setRestriction] = useState("none"); // Default restriction
  const [groupResponse, setGroupResponse] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Initialize the SDK with the development environment
  const apiSdk = new ApiSdk("https://api.bandada.pse.dev");

  const createGroup = async () => {
    const groupCreateDetails = {
      name: name, // Get name from state
      description: description, // Get description from state
      treeDepth: 16,
      fingerprintDuration: 3600,
      restriction: restriction, // Add restriction selection
    };
    const apiKey = "df6261c7-fe90-43a3-baa1-fa0a01e7dac6";
    

    try {
      // Use the Bandada SDK to create a group
      const group = await apiSdk.createGroup(groupCreateDetails, apiKey);
      console.log(group.admin);

      // Set the response from the API
      setGroupResponse(group);
      navigate("/all-groups");
    } catch (err) {
      // Set any error message
      setError(err.message);
    }
  };

  return (
    <div className="m-24">
      <div className="max-w-lg mx-auto p-6 shadow-md rounded-lg ">
        <h2 className="text-2xl font-bold mb-4">Create a Group</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission behavior
            createGroup(); // Call the createGroup function when the form is submitted
          }}
          className="space-y-4"
        >
          {/* Group Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Group Name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} // Update name state
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter group name"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description:
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)} // Update description state
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter group description"
            ></textarea>
          </div>

          {/* Joining Restriction */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Joining Restriction:
            </label>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="restriction"
                  value="none"
                  checked={restriction === "none"}
                  onChange={() => setRestriction("none")}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <label className="ml-3 block text-sm font-medium text-gray-700">
                  No Restriction
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="restriction"
                  value="nft"
                  checked={restriction === "nft"}
                  onChange={() => setRestriction("nft")}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <label className="ml-3 block text-sm font-medium text-gray-700">
                  Only NFT Holders
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="restriction"
                  value="crk"
                  checked={restriction === "crk"}
                  onChange={() => setRestriction("crk")}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <label className="ml-3 block text-sm font-medium text-gray-700">
                  Only Token Holders
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Group
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateGroup;
