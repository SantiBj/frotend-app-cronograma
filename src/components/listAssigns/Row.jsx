import { TiDelete } from "react-icons/ti";
import moment from "moment-timezone";

export function Row({assign,isInstructor,openModal}) {
     
    function formatDate(date) {
        return moment(date).format("DD MMMM YYYY");
      }

  return (
    <tr>
      <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200">
        {assign.rap.nombre}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
        {formatDate(assign.fechaInicio)}
      </td>
      <td className="px-6 py-4  text-sm text-gray-800 dark:text-gray-200">
        {formatDate(assign.fechaFin)}
      </td>
      <td className="px-6 py-4  text-sm text-gray-800 dark:text-gray-200">
        {isInstructor ? assign.ficha.numero : assign.instructor.nombreCompleto}
      </td>
      <td className="px-6 py-4 text-right text-sm font-medium">
        <button
          onClick={() => openModal(assign.id)}
          className="text-Red duration-300 hover:text-Black"
        >
          <TiDelete size={30} />
        </button>
      </td>
    </tr>
  );
}
