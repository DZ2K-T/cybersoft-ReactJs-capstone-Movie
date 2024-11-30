import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons"; // Regular icon
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function ListFilms(props) {
  const { data } = props;
  return (
    <tbody>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {data.maPhim}
        </th>
        <td className="px-6 py-4 ">
          <img
            className="rounded-t-lg w-full h-auto"
            src={data.hinhAnh}
            alt={data.hinhAnh}
          />
        </td>
        <td className="px-6 py-4">{data.tenPhim}</td>
        <td className="px-6 py-4">{data.moTa}</td>
        <td className="px-6 py-4 ">
          <button className="mr-3">
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </td>
      </tr>
    </tbody>
  );
}