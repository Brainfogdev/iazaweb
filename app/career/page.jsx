'use client'
import React from 'react';

const page = () => {
  return (
    <div className="mx-20 my-10">
      <h2 className="text-2xl">Job Openings</h2>
      <div className='my-10 flex flex-col gap-5'>
        <OpenJobCard title={"Accounts Officer"} file={"/job/account-officier.docx"} />
        <OpenJobCard title={"Quality Assurance Officer"} file={"/job/quality-assurance.docx"} />
      </div>
    </div>
  );
};

const OpenJobCard = ({ title, file }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = file; // File URL relative to the public folder
    link.download = file.split('/').pop(); // Default file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="p-5 rounded-lg bg-slate-100 cursor-pointer hover:bg-slate-200"
      onClick={handleDownload}
    >
      <h1>{title}</h1>
    </div>
  );
};

export default page;
