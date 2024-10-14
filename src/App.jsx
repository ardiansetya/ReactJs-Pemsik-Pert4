import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function App() {
  return (
    <>
      <div className="bg-slate-400">
        <div className="flex min-h-screen">
          <Sidebar />
          <Content />
        </div>
      </div>
    </>
  );
}
export default App;

function Sidebar() {
  return (
    <aside className="bg-zinc-600 w-72 text-white">
      <div className="p-8 mt-10">
        <h2 className="font-bold text-4xl">Admin&nbsp;Panel</h2>
        <nav className="mt-4 ml-4">
          <ul>
            <li className="mb-4 flex items-center">
              <i data-feather="home" className="mr-2"></i>
              <a href="#" className="hover:underline">
                Dashboard
              </a>
            </li>
            <li className="mb-4 flex items-center">
              <i data-feather="users" className="mr-2"></i>
              <a href="#" className="hover:underline">
                Mahasiswa
              </a>
            </li>
            <li className="flex items-center">
              <i data-feather="settings" className="mr-2"></i>
              <a href="#" className="hover:underline">
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

function Content() {
  return (
    <>
      <div className="flex flex-col flex-1">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

function Header() {
  return (
    <header className="bg-zinc-200 p-4 flex justify-end">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Logout
      </button>
    </header>
  );
}

function Main() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const modalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const modalEditHandler = () => {
    setOpenModalEdit(true);
  };

  const closeModalEditHandler = () => {
    setOpenModalEdit(false);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const MySwal = withReactContent(Swal);
    MySwal.fire(
      {
        title: "Success!",
        text: "Data Berhasil Ditambah",
        icon: "success",
      },
      closeModalHandler()
    );
  };
  const handlerEdit = (e) => {
    e.preventDefault();
    const MySwal = withReactContent(Swal);
    MySwal.fire(
      {
        title: "Success!",
        text: "Data Berhasil Diedit",
        icon: "success",
      },
      closeModalEditHandler()
    );
  };

  const handlerDelete = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: true,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  return (
    <>
      <main className="bg-white p-6 flex-grow">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-bold text-2xl mb-4">Daftar Mahasiswa</h2>
          <button
            id="addStudentBtn"
            className="bg-green-500 px-4 py-2 rounded-xl text-white mb-4"
            onClick={modalHandler}>
            Tambah Mahasiswa
          </button>
          <table className="min-w-full table-auto" id="studentTable">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">No.</th>
                <th className="border px-4 py-2">NIM</th>
                <th className="border px-4 py-2">Nama</th>
                <th className="border px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">1.</td>
                <td className="border px-4 py-2">A11.2022.14596</td>
                <td className="border px-4 py-2">Ardian Setya Pradana</td>
                <td className="border px-4 py-2 flex gap-5">
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded editBtn"
                    onClick={modalEditHandler}>
                    Edit
                  </button>
                  <button
                    onClick={handlerDelete}
                    className="bg-red-500 text-white px-4 py-2 rounded deleteBtn">
                    Hapus
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2.</td>
                <td className="border px-4 py-2">A11.2023.14596</td>
                <td className="border px-4 py-2">Mas Rusdi</td>
                <td className="border px-4 py-2 flex gap-5">
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded editBtn"
                    onClick={modalEditHandler}>
                    Edit
                  </button>
                  <button
                    onClick={handlerDelete}
                    className="bg-red-500 text-white px-4 py-2 rounded deleteBtn">
                    Hapus
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">3.</td>
                <td className="border px-4 py-2">A11.2024.14596</td>
                <td className="border px-4 py-2">Ambatublow</td>
                <td className="border px-4 py-2 flex gap-5">
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded editBtn"
                    onClick={modalEditHandler}>
                    Edit
                  </button>
                  <button
                    onClick={handlerDelete}
                    className="bg-red-500 text-white px-4 py-2 rounded deleteBtn">
                    Hapus
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      {openModal && (
        <AddMhsModal onClose={closeModalHandler} submit={handlerSubmit} />
      )}
      {openModalEdit && (
        <EditMhsModal onClose={closeModalEditHandler} edit={handlerEdit} />
      )}
    </>
  );
}

function Footer() {
  return (
    <>
      <footer className="bg-zinc-500 text-center text-white p-4">
        All Right Reserved &copy; 2024 Admin fufufafa
      </footer>
    </>
  );
}

function EditMhsModal({ onClose, edit }) {
  return (
    <>
      <div
        id="studentModal"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white w-1/3 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4" id="modalTitle">
            Edit Mahasiswa
          </h2>
          <form id="studentForm">
            <div className="mb-4">
              <label htmlFor="nim" className="block font-semibold mb-1">
                NIM
              </label>
              <input
                type="text"
                id="nim"
                className="w-full border px-4 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="nama" className="block font-semibold mb-1">
                Nama
              </label>
              <input
                type="text"
                id="nama"
                className="w-full border px-4 py-2"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-gray-400 text-white px-4 py-2 rounded mr-2"
                onClick={onClose}>
                Batal
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={edit}>
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
function AddMhsModal({ onClose, submit }) {
  return (
    <>
      <div
        id="studentModal"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white w-1/3 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4" id="modalTitle">
            Tambah Mahasiswa
          </h2>
          <form id="studentForm">
            <div className="mb-4">
              <label htmlFor="nim" className="block font-semibold mb-1">
                NIM
              </label>
              <input
                type="text"
                id="nim"
                className="w-full border px-4 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="nama" className="block font-semibold mb-1">
                Nama
              </label>
              <input
                type="text"
                id="nama"
                className="w-full border px-4 py-2"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-gray-400 text-white px-4 py-2 rounded mr-2"
                onClick={onClose}>
                Batal
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={submit}>
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
