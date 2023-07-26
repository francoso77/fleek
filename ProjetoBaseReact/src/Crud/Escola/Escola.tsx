import { useContext, useState } from 'react';
import { ContextoGlobal, ContextoGlobalInterface } from '../../Contextos/ContextoGlobal';
import { EscolaInterface } from '../../Interfaces/EscolaInterfaces';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { URL_SERVIDOR } from '../../Config/Setup';
import InputText from '../../Componentes/InputText';
import ClsEscola from './ClsEscola';
import Button from '@mui/material/Button';
import { Box, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, IconButton, InputLabel, MenuItem, Paper, Radio, RadioGroup, Rating, Select, SelectChangeEvent, Switch, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { AcaoInterface } from '../../Interfaces/AcaoInterfaces';


const TEMPO_REFRESH_TEMPORARIO = 500

interface PesquisaInterface {
  nome: string
}

/*const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));*/


export default function Escola() {

  const [rsPesquisa, setRsPesquisa] = useState<Array<EscolaInterface>>([])

  const globalContext = (useContext(ContextoGlobal) as ContextoGlobalInterface)

  const [localState, setLocalState] = useState<AcaoInterface>({ acao: 'pesquisando' })

  const [escola, setEscola] = useState<EscolaInterface>({
    cnpj: '',
    email: '',
    idEscola: 0,
    nome: ''
  })

  const [pesquisa, setPesquisa] = useState<PesquisaInterface>({ nome: '' })

  const printTable = () =>
    rsPesquisa.map((escola) =>
      <tr key={escola.idEscola}>
        <td>{escola.nome}</td>
        <td>{escola.cnpj}</td>
        <td>{escola.email}</td>
        <td>
          <input type="button" value="Editar" onClick={() => btEditar(escola.idEscola, 'editando')} />
          <input type="button" value="Excluir" onClick={() => btEditar(escola.idEscola, 'excluindo')} />
        </td>
      </tr>
    )

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'nome',
      headerName: 'Nome',
      width: 150,
      editable: true,
      headerClassName: '#ff0011',
    },
    {
      field: 'cnpj',
      headerName: 'CNPJ',
      width: 150,
      editable: true,
      headerClassName: '#ff0011',
    },
    {
      field: 'email',
      headerName: 'E-mail',
      width: 150,
      editable: true,
      headerClassName: '#ff0011',
    },
    {
      field: 'acoes',
      headerName: 'Ações',
      width: 110,
      editable: true,
      headerClassName: '#ff0011',
      sortable: false,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.nome || ''} ${params.row.email || ''}`,
    },
  ];


  const rows = [
    { id: 1, nome: 'Pedro', cnpj: '1213131321Jon', email: 'sdfasdfasdfasdf' },
    { id: 2, nome: 'Carlos', cnpj: '1213131321Jon', email: 'sdfasdfasdfasdf' },
    { id: 3, nome: 'Nilton', cnpj: '1213131321Jon', email: 'sdfasdfasdfasdf' },
    { id: 4, nome: 'Ana Clara', cnpj: '1213131321Jon', email: 'sdfasdfasdfasdf' },
  ];


  //console.log (JSON.stringify(rsPesquisa))
  //const rows: any = JSON.stringify(rsPesquisa)

  const [checked, setChecked] = React.useState(true);

  const handleChangeAtivo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const [value, setValue] = React.useState('oficial');

  const handleChangeTipo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const federacoes = [
    'Federação Brasileira',
    'Federação Carioca',
    'Federação Mineira',
    'Federação Paulista'
  ]


  const labels: { [index: string]: string } = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

  const getLabelText = (value: number) => {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }

  const [valueStart, setValueStart] = React.useState<number | null>(2);
  const [hover, setHover] = React.useState(-1);

  const [federacao, setFederacao] = React.useState('');

  const handleChangeFederacao = (event: SelectChangeEvent) => {
    setFederacao(event.target.value as string);
  };
  const [veterinario, setVeterinario] = React.useState(false);

  const handleChangeVeterinario = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVeterinario(event.target.checked);
  };

  const btEditar = (idEscola: number, acao: string) => {

    let clsEscola: ClsEscola = new ClsEscola()

    clsEscola.btEditar<EscolaInterface>(
      globalContext,
      idEscola,
      setEscola,
      setLocalState,
      acao
    )

  }

  const btIncluir = () => {
    setLocalState({ acao: 'incluindo' })
  }

  const btCancelar = () => {
    setLocalState({ acao: 'pesquisando' })
    btPesquisar()
  }

  const btConfirmarExclusao = () => {
    globalContext.setMensagemState({ exibir: true, mensagem: 'Excluindo os dados da Escola', tipo: 'processando' })

    setTimeout(() => {

      fetch(URL_SERVIDOR.concat('/escola/'.concat(escola.idEscola.toString())), {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'DELETE'
      }).then(rs => {

        if (rs.ok) {

          globalContext.setMensagemState({ exibir: true, mensagem: 'Escola Excluída com Sucesso', tipo: 'aviso' })

          setEscola({ nome: '', cnpj: '', email: '', idEscola: 0 })

          setLocalState({ acao: 'pesquisando' })

          btPesquisar()

        } else {

          globalContext.setMensagemState({ exibir: true, mensagem: 'Erro ao Excluir Escola!!!', tipo: 'erro' })

        }

      }).catch(() => {

        globalContext.setMensagemState({ exibir: true, mensagem: 'Erro no Servidor. Não foi possível Excluir Escola!!!', tipo: 'erro' })

      })

    }, TEMPO_REFRESH_TEMPORARIO)

  }

  const btConfirmarEdicao = () => {
    globalContext.setMensagemState({ exibir: true, mensagem: 'Alterando os dados da Escola', tipo: 'processando' })

    setTimeout(() => {
      fetch(URL_SERVIDOR.concat('/escola/'.concat(escola.idEscola.toString())), {
        body: JSON.stringify(escola),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'PUT'

      }).then(rs => {
        if (rs.ok) {

          setEscola({ nome: '', cnpj: '', email: '', idEscola: 0 })

          setLocalState({ acao: 'pesquisando' })

          btPesquisar()

          globalContext.setMensagemState({ exibir: true, mensagem: 'Dados Alterados com Sucesso', tipo: 'aviso' })
        } else {
          globalContext.setMensagemState({ exibir: true, mensagem: 'Erro ao Alterar Escola!!!', tipo: 'erro' })
        }
      }).catch(() => {
        globalContext.setMensagemState({ exibir: true, mensagem: 'Erro no Servidor. Não foi possível alterar Escola!!!', tipo: 'erro' })
      })
    }, TEMPO_REFRESH_TEMPORARIO)
  }

  const btConfirmarInclusao = () => {

    globalContext.setMensagemState({ exibir: true, mensagem: 'Incluindo Escola', tipo: 'processando' })

    setTimeout(() => {
      fetch(URL_SERVIDOR.concat('/escola'), {
        body: JSON.stringify(escola),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST'
      }).then(rs => {
        if (rs.status === 201) {
          setEscola({ nome: '', cnpj: '', email: '', idEscola: 0 })
          globalContext.setMensagemState({ exibir: true, mensagem: 'Escola Cadastrada com Sucesso', tipo: 'aviso' })
          //btPesquisar()
        } else {
          globalContext.setMensagemState({ exibir: true, mensagem: 'Erro ao Incluir Escola!!!', tipo: 'erro' })
        }
      }).catch(() => {
        globalContext.setMensagemState({ exibir: true, mensagem: 'Erro no Servidor. Não foi possível incluir Escola!!!', tipo: 'erro' })
      })
    }, TEMPO_REFRESH_TEMPORARIO)

  }

  const btPesquisar = () => {

    globalContext.setMensagemState({ exibir: true, mensagem: 'Pesquisando Escola', tipo: 'processando' })

    setTimeout(() => {

      fetch(URL_SERVIDOR.concat('/escola?nome_like='.concat(pesquisa.nome)), {
        // body: JSON.stringify(escola),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET'
      }).then(rs => {

        // Primeiro Then do Fetch - Testo Status + Tratamento dos dados

        if (rs.status === 200) {
          globalContext.setMensagemState({ exibir: false, mensagem: '', tipo: 'aviso' })

          // Envio somente os dados para o próximo Then....
          return rs.json()

        } else {
          globalContext.setMensagemState({ exibir: true, mensagem: 'Erro ao Pesquisar Escola!!!', tipo: 'erro' })
        }
      }).then(rsEscolas => {

        console.log(JSON.stringify(rsEscolas))
        setRsPesquisa(rsEscolas)

      }).catch(() => {
        globalContext.setMensagemState({ exibir: true, mensagem: 'Erro no Servidor. Não foi possível pesquisar Escola!!!', tipo: 'erro' })
      })

    }, TEMPO_REFRESH_TEMPORARIO)

  }
  const irpara = useNavigate()

  const btFechar = () => {
    irpara('/')
  }

  return (
    <>
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Paper variant="outlined" sx={{ padding: 2 }}>

          <Grid container sx={{ display: 'flex', alignItems: 'center' }}>

            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography component="h5" variant="h5" align="left">
                Cadastro de Produtos
                <Typography variant="body2" gutterBottom>
                  Cadastro de todos os produtos sfdgsfdgsg sfgsdfg sdfgsdg sdgdfg
                </Typography>
              </Typography>

              <IconButton onClick={() => btFechar()}>
                <CloseIcon />
              </IconButton>
            </Grid>

            {localState.acao === 'pesquisando' &&

              <>
                <Grid item xs={12} sm={10} sx={{ mb: 3 }}>
                  <InputText label="Pesquisa" type="text" dados={pesquisa} field="nome" setState={setPesquisa} />

                </Grid>
                <Grid item xs={12} sm={2} sx={{ textAlign: { xs: 'right', sm: 'center' } }}>
                  <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={() => btPesquisar()}>
                    <SearchIcon />
                  </IconButton>

                  <Button variant='contained' onClick={() => btIncluir()}>Incluir</Button>

                </Grid>



              </>
            }

            {localState.acao !== 'pesquisando' &&
              <>
                <Grid item xs={12} sm={10} mt={3}>
                  <InputText label="Nome" type="text" dados={escola} field="nome" setState={setEscola} disabled={localState.acao == 'excluindo' ? true : false} />
                </Grid>
                <Grid item xs={12} sm={2} mt={3} sx={{ pl: { sm: 2 } }}>
                  <FormControlLabel
                    value="ativo"
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={handleChangeAtivo}
                        inputProps={{ 'aria-label': 'controlled' }}
                      />}
                    label="Ativo"
                    labelPlacement="top"
                  />
                </Grid>
                <Grid item xs={12} sm={8} mt={3}>
                  <InputText label="CNPJ" type="text" dados={escola} field="cnpj" setState={setEscola} disabled={localState.acao == 'excluindo' ? true : false} />
                </Grid>

                <Grid item xs={12} sm={2} mt={3} ml={10} sx={{ padding: 1 }} borderRadius={3} border={1} borderColor={'lightgray'}>
                  <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">Tipo</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={value}
                      onChange={handleChangeTipo}
                    >
                      <FormControlLabel value="oficial" control={<Radio />} label="Oficial" />
                      <FormControlLabel value="match" control={<Radio />} label="Match" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={8} mt={3} mr={1}>
                  <InputText label="e-mail" type="text" dados={escola} field="email" setState={setEscola} disabled={localState.acao == 'excluindo' ? true : false} />
                </Grid>
                <Grid item xs={12} sm={3} mt={5}>
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Federação</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={federacao}
                        label="Federação"
                        onChange={handleChangeFederacao}
                      >
                        {federacoes.map((federacao, i) => (
                          <MenuItem key={i} value={i}>{federacao}</MenuItem>
                        ))}

                      </Select>

                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} mt={3} mb={3}>

                  <Box
                    sx={{
                      width: 200,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Rating
                      name="hover-feedback"
                      value={valueStart}
                      precision={0.5}
                      getLabelText={getLabelText}
                      onChange={(event, newValue) => {
                        setValueStart(newValue);
                      }}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    {valueStart !== null && (
                      <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : valueStart]}</Box>
                    )}
                  </Box>
                </Grid>
                <Grid item xs={12} sm={2} mt={3} ml={5} mb={3}>

                  <FormControlLabel control={
                    <Switch
                      checked={veterinario}
                      onChange={handleChangeVeterinario}
                    />}
                    label="Tem Veterinário?" />
                </Grid>
              </>
            }

            {localState.acao === 'incluindo' &&
              <Button variant="contained" onClick={btConfirmarInclusao}>Confirmar Inclusão</Button>
            }

            {localState.acao === 'editando' &&
              <Button variant="contained" onClick={btConfirmarEdicao}>Confirmar Edição</Button>
            }

            {localState.acao === 'excluindo' &&
              <Button variant="contained" onClick={btConfirmarExclusao}>Confirmar Exclusão</Button>
            }

            {localState.acao !== 'pesquisando' &&
              <Button variant="contained" onClick={btCancelar}>Cancelar</Button>
            }

            {
              localState.acao === 'pesquisando' &&


              <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  checkboxSelection
                  disableSelectionOnClick
                  experimentalFeatures={{ newEditingApi: true }}
                />
              </Box>
            }
            {/*<table className='clsTableEscola'>
                <thead>
                  <tr>
                    <td>Nome</td>
                    <td>CNPJ</td>
                    <td>e-mail</td>
                    <td>Ações</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    printTable()
                  }
                </tbody>
                </table>*/}

          </Grid>
        </Paper>
      </Container>
    </>
  );

}
