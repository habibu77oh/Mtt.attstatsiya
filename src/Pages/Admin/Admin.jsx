import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./admin.css";
function Admin() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <div className="media-admin">
      <div className="admin">
        <div className="addquestion-buttons">
          <div className="scroll-buttons">
            <button className="admin-button">
              <Link className="Link" to={"/addquestion1"}>
                1-Kun uchun savol qoshish
              </Link>
            </button>
            <button className="admin-button">
              <Link className="Link" to={"/addquestion2"}>
                2-Kun uchun savol qoshish
              </Link>
            </button>
            <button className="admin-button">
              <Link className="Link" to={"/addquestion3"}>
                3-Kun uchun savol qoshish
              </Link>
            </button>
            <button className="admin-button">
              <Link className="Link" to={"/addquestion4"}>
                4-Kun uchun savol qoshish
              </Link>
            </button>
            <button className="admin-button">
              <Link className="Link" to={"/addquestion5"}>
                5-Kun uchun savol qoshish
              </Link>
            </button>
            <button className="admin-button">
              <Link className="Link" to={"/addquestion6"}>
                6-Kun uchun savol qoshish
              </Link>
            </button>
            <button className="admin-button">
              <Link className="Link" to={"/addquestion7"}>
                7-Kun uchun savol qoshish
              </Link>
            </button>
            <button className="admin-button">
              <Link className="Link" to={"/addquestion8"}>
                8-Kun uchun savol qoshish
              </Link>
            </button>
            <button className="admin-button">
              <Link className="Link" to={"/addquestion9"}>
                9-Kun uchun savol qoshish
              </Link>
            </button>
            <button className="admin-button">
              <Link className="Link" to={"/addquestion10"}>
                10-Kun uchun savol qoshish
              </Link>
            </button>
            <button className="admin-button">
              <Link className="Link" to={"/addquestion11"}>
                11-Kun uchun savol qoshish
              </Link>
            </button>
            <button className="admin-button">
              <Link className="Link" to={"/addquestion12"}>
                12-Kun uchun savol qoshish
              </Link>
            </button>
            <button className="admin-button">
              <Link className="Link" to={"/addquestion13"}>
                13-Kun uchun savol qoshish
              </Link>
            </button>
            <button className="admin-button">
              <Link className="Link" to={"/addquestion14"}>
                14-Kun uchun savol qoshish
              </Link>
            </button>
            <button className="admin-button">
              <Link className="Link" to={"/addquestion15"}>
                15-Kun uchun savol qoshish
              </Link>
            </button>
          </div>
        </div>
        <div className="admin-table">
          <h1 className="table-title">Ro'yxatdan o'tgan foydalanuvchilar</h1>
          <TableContainer className="tablecontainer" component={Paper}>
            <Table aria-label="user table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>Ism</b>
                  </TableCell>
                  <TableCell>
                    <b>Parol</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.length > 0 ? (
                  users.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.password}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} align="center">
                      Foydalanuvchilar mavjud emas
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default Admin;
