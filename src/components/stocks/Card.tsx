import { ReactNode } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

type CardProps = {
  title: string;
  children: ReactNode;
};

const Card = ({ title, children }: CardProps) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-md h-[16rem]">
      <div className="card-header flex justify-between items-center">
        <h1 className="font-semibold">{title}</h1>
        <button type="button" title="View More">
          <BsThreeDotsVertical />
        </button>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
};
export default Card;
