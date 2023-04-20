type Props = {};

const packages = [
  'typescript',
  'tailwindcss',
  'redux',
  'formik',
  'yup',
  'react-icons',
  'sweetalert2',
  'redux-toolkit',
  'axios',
  'react-router'
];

const Packages = (props: Props) => {
  return (
    <section>
      <h3 className="text-center uppercase font-semibold underline my-2">Packages Included</h3>
      <div className="flex flex-wrap justify-center gap-3 w-[50%] mx-auto">
        {packages.map((pkg) => (
          <div
            key={pkg}
            className="bg-slate-500 text-white flex justify-center items-center p-2 rounded-lg"
          >
            {pkg}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Packages;
