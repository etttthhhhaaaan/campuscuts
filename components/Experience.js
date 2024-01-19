import userData from "@constants/data";
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
                </tr>
                <tr>
                  <td>Hair Cut for Active Military</td>
                </tr>
                <tr>
                  <td>(Long hair ext.)</td>
                </tr>
                <tr>
                  <td>Senior/kid</td>
                </tr>
                <tr>
                  <td>Shampoo (Blow Dry Extra)</td>
                </tr>
                <tr>
                  <td>Shampoo and Styling</td>
                </tr>
                <tr>
                  <td>Perm</td>
                </tr>
                <tr>
                  <td>Color</td>
                </tr>
                <tr>
                  <td>Highlight</td>
                </tr>
                <tr>
                  <td>Special Updo</td>
                </tr>
                <tr>
                  <td>Eyebrow/Lip Wax</td>
                </tr>
                <tr>
                  <td>Beard Trim</td>
                </tr>
                <tr>
                  <td>Bang Trim</td>
                </tr>
                
                <tr>
                  <td>Edge up</td>
                </tr>
                <tr>
                  <td> <br /></td>
                </tr>
                <tr>
                  <td>(Tax may apply for some services)</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>$18.00</td>
                </tr>
                <tr>
                  <td>$15.00</td>
                </tr>
                <tr>
                  <td>$4.00</td>
                </tr>
                <tr>
                  <td>$17.00</td>
                </tr>
                <tr>
                  <td>$4.00</td>
                </tr>
                <tr>
                  <td>$25.00</td>
                </tr>
                <tr>
                  <td>$65.00+</td>
                </tr>
                <tr>
                  <td>$55.00+</td>
                </tr>
                <tr>
                  <td>$70.00+</td>
                </tr>
                <tr>
                  <td>$45.00</td>
                </tr>
                <tr>
                  <td>$15.00</td>
                </tr>
                <tr>
                  <td>$10.00</td>
                </tr>
                <tr>
                  <td>$10.00</td>
                </tr>
                
                <tr>
                  <td>$12.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="max-w-fill mx-auto h-48 bg-gradient-to-b from-[#232b2b] to-[#3b444b]" />

    </section>
  );
}

