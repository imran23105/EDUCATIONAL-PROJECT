import React from 'react';

const MemberDetails = ({name,designation,img}) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-4 w-[250px] hover:shadow-xl transition duration-300">
      <div className="h-[120px] w-[120px] rounded-full overflow-hidden border-4 border-red-500 mb-4 hover:border-green-500">
        <img
          src={img}
          alt="Member"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-lg font-semibold text-gray-800">{name}</h1>
      <p className="text-sm text-yellow-600">{designation}</p>
    </div>
  );
};

export default MemberDetails;
