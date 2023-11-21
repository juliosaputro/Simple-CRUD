import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Button,
  Stack,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Select,
  MenuItem,
  InputLabel,
  Box,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { dataDummy } from "../datas/dummy";
import CrudArray from "../datas/crud";
import ButtonPrimary from "./ButtonPrimary";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";

export default function TableData() {
  const { myArray, deleteItem, updateItem, addData } = CrudArray(dataDummy);

  // table pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //To IDR
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  // Edit and Add Form
  const [action, setAction] = useState("add");
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState();
  const [newNama, setNewNama] = useState("");
  const [newSku, setNewSku] = useState("");
  const [newBrand, setNewBrand] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newVariasiNama, setNewVariasiNama] = useState("");
  const [newVariasiSku, setNewVariasiSku] = useState("");
  const [newHarga, setNewHarga] = useState();

  const handleClickOpenAdd = () => {
    setOpen(true);
  };

  const handleClickOpenEdit = (
    act,
    id,
    nama,
    sku,
    brand,
    desc,
    namaV,
    skuV,
    harga
  ) => {
    setOpen(true);
    setAction(act);
    setEditId(id);
    setNewNama(nama);
    setNewSku(sku);
    setNewBrand(brand);
    setNewDesc(desc);
    setNewVariasiNama(namaV);
    setNewVariasiSku(skuV);
    setNewHarga(harga);
  };

  const handleClose = () => {
    setOpen(false);
    setAction("add");
    setNewNama("");
    setNewSku("");
    setNewBrand("");
    setNewDesc("");
    setNewVariasiNama("");
    setNewVariasiSku("");
    setNewHarga();
  };

  const AddObj = {
    id: myArray.length + 1,
    nama: newNama,
    sku: newSku,
    brand: newBrand,
    desc: newDesc,
    Variasi: {
      nama: newVariasiNama,
      sku: newVariasiSku,
      harga: newHarga,
    },
  };

  return (
    <div style={{ flex: 1 }}>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-end",
          marginBlock: 5,
        }}
      >
        <ButtonPrimary
          tittle="Tambah"
          icon={
            <AddCircleOutlineIcon style={{ width: "24px", height: "24px" }} />
          }
          onClick={() => handleClickOpenAdd()}
        />
      </Box>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029", borderRadius: 12 }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">No</TableCell>
              <TableCell align="center">Nama</TableCell>
              <TableCell align="center">SKU</TableCell>
              <TableCell align="center">Brand</TableCell>
              <TableCell align="center">Deskripsi</TableCell>
              <TableCell align="center">Variasi</TableCell>
              <TableCell align="center">SKU Variasi</TableCell>
              <TableCell align="center">Harga</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myArray
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((k, y) => {
                const variasi = k.Variasi;
                return (
                  <TableRow key={y}>
                    <TableCell align="center">{k.id}</TableCell>
                    <TableCell align="center">{k.nama}</TableCell>
                    <TableCell align="center">{k.sku}</TableCell>
                    <TableCell align="center">{k.brand}</TableCell>
                    <TableCell align="left">{k.desc}</TableCell>
                    <TableCell align="center">{variasi.nama}</TableCell>
                    <TableCell align="center">{variasi.sku}</TableCell>
                    <TableCell align="center">
                      {rupiah(variasi.harga)}
                    </TableCell>
                    <TableCell align="center">
                      <Stack direction="row" spacing={2}>
                        <Button
                          variant="outlined"
                          color="error"
                          size="small"
                          startIcon={<DeleteIcon />}
                          onClick={() => deleteItem(k.id)}
                        >
                          Hapus
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<ModeIcon />}
                          onClick={() =>
                            handleClickOpenEdit(
                              "edit",
                              k.id,
                              k.nama,
                              k.sku,
                              k.brand,
                              k.desc,
                              variasi.nama,
                              variasi.sku,
                              variasi.harga
                            )
                          }
                        >
                          Edit
                        </Button>
                        <Dialog open={open} onClose={handleClose}>
                          <DialogTitle>
                            {action === "add" ? "Tambah" : "Edit"} Data
                          </DialogTitle>
                          <DialogContent>
                            <TextField
                              autoFocus
                              label="Nama"
                              type="text"
                              value={newNama}
                              fullWidth
                              variant="standard"
                              onChange={(e) => {
                                setNewNama(e.target.value);
                              }}
                            />
                            <TextField
                              autoFocus
                              label="SKU"
                              value={newSku}
                              type="text"
                              fullWidth
                              variant="standard"
                              onChange={(e) => {
                                setNewSku(e.target.value);
                              }}
                            />
                            <InputLabel id="demo-simple-select-standard-label">
                              Brand
                            </InputLabel>
                            <Select
                              style={{ marginBlock: 5 }}
                              fullWidth
                              labelId="demo-simple-select-standard-label"
                              id="demo-simple-select-standard"
                              value={newBrand}
                              label={newBrand}
                              onChange={(e) => {
                                setNewBrand(e.target.value);
                              }}
                            >
                              <MenuItem value={"Iphone"}>Iphone</MenuItem>
                              <MenuItem value={"Xiaomi"}>Xiaomi</MenuItem>
                              <MenuItem value={"Samsung"}>Samsung</MenuItem>
                            </Select>
                            <InputLabel id="demo-simple-select-standard-label">
                              Deskripsi
                            </InputLabel>
                            <TextareaAutosize
                              autoFocus
                              label="Deskripsi"
                              value={newDesc}
                              style={{ width: "100%", marginBlock: 5 }}
                              minRows={3}
                              variant="standard"
                              onChange={(e) => {
                                setNewDesc(e.target.value);
                              }}
                            />
                            <TextField
                              autoFocus
                              label="Nama Variasi"
                              type="text"
                              value={newVariasiNama}
                              fullWidth
                              variant="standard"
                              onChange={(e) => {
                                setNewVariasiNama(e.target.value);
                              }}
                            />
                            <TextField
                              autoFocus
                              label="SKU Variasi"
                              value={newVariasiSku}
                              type="text"
                              fullWidth
                              variant="standard"
                              onChange={(e) => {
                                setNewVariasiSku(e.target.value);
                              }}
                            />
                            <TextField
                              autoFocus
                              label="Harga"
                              type="number"
                              value={newHarga}
                              fullWidth
                              variant="standard"
                              onChange={(e) => {
                                setNewHarga(e.target.value);
                              }}
                            />
                          </DialogContent>
                          <DialogActions>
                            <Button
                              onClick={() => {
                                handleClose();
                                if (action === "edit") {
                                  updateItem(
                                    editId,
                                    newNama,
                                    newSku,
                                    newBrand,
                                    newDesc,
                                    newVariasiNama,
                                    newVariasiSku,
                                    newHarga
                                  );
                                } else {
                                  addData(AddObj);
                                }
                              }}
                            >
                              {action === "add" ? "Tambah" : "Edit"}
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={dataDummy.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
}
