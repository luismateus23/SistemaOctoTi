using Microsoft.AspNetCore.Mvc;
using SistemaOctoTi.Models;
using SistemaOctoTi.Repositories;
using System.Collections.Generic;

namespace SistemaOctoTi.Controllers
{
    public class ClienteController : Controller
    {
        private readonly IClienteRepositorio _clienteRepositorio;
        private readonly IEnderecoRepositorio _enderecoRepositorio;
        private readonly ITelefoneRepositorio _telefoneRepositorio;
        public ClienteController(IClienteRepositorio clienteRepositorio,IEnderecoRepositorio enderecoRepositorio, ITelefoneRepositorio telefoneRepositorio)
        {
            _clienteRepositorio = clienteRepositorio;
            _enderecoRepositorio = enderecoRepositorio;
            _telefoneRepositorio = telefoneRepositorio;
        }

        public IActionResult Index()
        {
            List<ClienteModel> contatos = _clienteRepositorio.BuscarTodos();

            return View(contatos);
        }

        public IActionResult Criar()
        {
            return View();
        }

        public IActionResult Editar(int id)
        {
            HomeIndexModel model = new HomeIndexModel();

            model.Cliente = _clienteRepositorio.BuscarPorId(id);
            model.Telefone = _telefoneRepositorio.BuscarPorId(id);
            model.Endereco = _enderecoRepositorio.BuscarPorId(id);           


            return View(model);
        }

        public IActionResult ApagarConfirmacao(int id)
        {
            HomeIndexModel home = new HomeIndexModel();

            home.Cliente = _clienteRepositorio.BuscarPorId(id);

            home.Endereco = _enderecoRepositorio.BuscarPorId(id); /*Provisory method*/
            home.Telefone = _telefoneRepositorio.BuscarPorId(id); /*Provisory method*/

            return View(home);
        }

        public IActionResult NovoTelefone(int id)
        {
            HomeIndexModel home = new HomeIndexModel();

            home.Cliente = _clienteRepositorio.BuscarPorId(id);
            home.Endereco = _enderecoRepositorio.BuscarPorId(id);
            home.Telefone =  _telefoneRepositorio.BuscarPorId(id);         

            return View(home);
        }

        public IActionResult NovoEndereco(int id)
        {
            EnderecoModel endereco = _enderecoRepositorio.BuscarPorId(id);

            return View(endereco);
        }

        public IActionResult Apagar(int id)
        {
            _enderecoRepositorio.Apagar(id);
            _telefoneRepositorio.Apagar(id);
            _clienteRepositorio.Apagar(id);

            return RedirectToAction("Index");
        }

        [HttpPost]
        public IActionResult NovoTelefone(HomeIndexModel home)
        {
            home.Telefone.CodigoCliente = home.Cliente;
            _telefoneRepositorio.Adicionar(home.Telefone);

            return RedirectToAction("Index");
        }

        [HttpPost] 
        public IActionResult Criar(HomeIndexModel home)
        {

            home.Cliente.QtdEndereco = 1;
            home.Cliente.QtdTelefone = 1;

            home.Telefone.CodigoCliente = home.Cliente;
            home.Endereco.CodigoCliente = home.Cliente;       


            _clienteRepositorio.Adicionar(home.Cliente);
            _enderecoRepositorio.Adicionar(home.Endereco);
            _telefoneRepositorio.Adicionar(home.Telefone);

            return RedirectToAction("Index");
        }

        [HttpPost]
        public IActionResult Editar(HomeIndexModel home)
        {
            _clienteRepositorio.Atualizar(home.Cliente);
            _enderecoRepositorio.Atualizar(home.Endereco);
            _telefoneRepositorio.Atualizar(home.Telefone);

            return RedirectToAction("Index");
        }
    }
}
