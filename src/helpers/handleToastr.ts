import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const handleToastr = (message: string, icon: string, text?: string) => {
  return MySwal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success' || icon,
    title: message,
    text: text,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
}

export default handleToastr;