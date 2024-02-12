import React from "react";

export default function Experience() {
  return (
    <section>

      <div className="max-w-fill mx-auto h-48 bg-gradient-to-b from-[#3b444b] to-[#232b2b]"/>

      <div className="bg-[#232b2b] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 max-w-xl mx-auto pt-20 pb-20">
          {/* Experience card */}
          <div className="relative experience-card border border-8 border-double p-20 rounded-md bg-[232b2b] z-10 mx-4">
            <h1 className="pb-4 text-5xl text-white md:text-5xl font-bold font-cursive text-center">Price List</h1>
            
            <table className="table-auto flex justify-between text-white">
              <thead>
                <tr>
                  <td>Hair Cut</td>
                  <td className="pl-10">$18.00</td>
                </tr>
                <tr>
                  <td>(Long hair ext.)</td>
                  <td className="pl-10">$4.00</td>
                </tr>
                <tr>
                  <td>Hair Cut for Active Military</td>
                  <td className="pl-10">$15.00</td>
                </tr>
                <tr>
                  <td>Senior/kid</td> 
                  <td className="pl-10">$17.00</td>
                </tr>
                <tr>
                  <td>Shampoo (Blow Dry Extra)</td>
                  <td className="pl-10">$4.00</td>
                </tr>
                <tr>
                  <td>Shampoo and Styling</td>
                  <td className="pl-10">$25.00</td>
                </tr>
                <tr>
                  <td>Perm</td>
                  <td className="pl-10">$65.00+</td>
                </tr>
                <tr>
                  <td>Color</td>
                  <td className="pl-10">$55.00+</td>
                </tr>
                <tr>
                  <td>Highlight</td>
                  <td className="pl-10">$70.00+</td>
                </tr>
                <tr>
                  <td>Special Updo</td>
                  <td className="pl-10">$45.00</td>
                </tr>
                <tr>
                  <td>Eyebrow/Lip Wax</td>
                  <td className="pl-10">$15.00</td>
                </tr>
                <tr>
                  <td>Beard Trim</td>
                  <td className="pl-10">$10.00</td>
                </tr>
                <tr>
                  <td>Bang Trim</td>
                  <td className="pl-10">$10.00</td>
                </tr>
                <tr>
                  <td>Edge up</td>
                  <td className="pl-10">$12.00</td>
                </tr>
                <tr>
                  <td> <br /></td>
                </tr>
                <tr>
                  <td>(Tax may apply for some services)</td>
                </tr>
              </thead>
              
            </table>
          </div>
        </div>
      </div>
      <div className="max-w-fill mx-auto h-48 bg-gradient-to-b from-[#232b2b] to-[#3b444b]" />

    </section>
  );
}

