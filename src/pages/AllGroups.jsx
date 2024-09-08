import React, { useEffect, useState } from "react";
import { ApiSdk, SupportedUrl } from "@bandada/api-sdk";

const AllGroups = () => {
  const [groups, setGroups] = useState([]);
  const [error, setError] = useState(null);

  const apiSdk = new ApiSdk("https://api.bandada.pse.dev");
  const apiKey = "df6261c7-fe90-43a3-baa1-fa0a01e7dac6";

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        // Fetch all groups using Bandada SDK
        const allGroups = await apiSdk.getGroupsByAdminId(
          "0x078ca966cb82a1b9efa8c6e8a3c5129cbbb2b768c9ae96d43805651675cccf32"
        );
        setGroups(allGroups); // Set groups to state
      } catch (err) {
        setError(err.message); // Set error if any
      }
    };

    fetchGroups();
  }, []);

  return (
    <div className="m-24">
      <h2 className="text-3xl font-bold mb-6">All Groups</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {groups.length === 0 ? (
        <p>No groups available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <div
              key={group.id}
              className="p-6 bg-white shadow-lg rounded-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-2">{group.name}</h3>
              <p className="text-gray-600 mb-4">{group.description}</p>
              <p className="text-gray-500">
                Restriction:{" "}
                <span className="font-medium capitalize">
                   
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllGroups;
