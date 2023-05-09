type NotificationProps = {
  title: string;
  message: string;
  icon: string;
  created_at: string;
};

const Notification = ({
  title,
  message,
  icon,
  created_at,
}: NotificationProps) => {
  return (
    <div className="notification_card border-b py-4 flex items-center gap-x-1">
      <div className="notification-img">
        <img src={icon} alt="New Item" width={30} height={30} />
      </div>
      <div className="notification-body flex-1">
        <div className="flex justify-between items-center">
          <h3 className="text-slate-700 dark:text-slate-100 font-semibold text-sm">
            {title}
          </h3>
          <p className="text-xs text-slate-700 dark:text-slate-100">
            {created_at}
          </p>
        </div>
        <p className="text-xs dark:text-slate-400">{message}</p>
      </div>
    </div>
  );
};
export default Notification;
