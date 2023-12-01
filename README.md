# user_api_node

<p>Essa API tem as seguintes rotas:</p>

<h3>**GET**</h3>

```
http://localhost:300/user/?id=?
```
<p>Na ausencia do parâmetro id, todos os usuários serão retornados.</p> 

<h3>**POST** (adiciona usuário)</h3>

```
http://localhost:300/user/
```
<p>

```
headers: {
"method": "POST",
"Content-Type": "application/json",
"body": "{'name' : 'Um Nome', 'email': 'email@email.com', 'data_nascimento' : '00/00/00'}"
}
```
</p>
<p>Espera-se o retorno do usuário adicionado.</p>

<h3>**PATCH**</h3>

```
http://localhost:300/user/:id
```
<p>

```
headers: {
"method": "PATCH",
"Content-Type": "application/json",
"body": "{'name' : 'Um Nome', 'email': 'email@email.com', 'data_nascimento' : '00/00/00'}"
}
```

</p>
<p>O corpo da mensagem não precisa conter todas as chaves do usuário, apenas a que deseja modificar e o valor. Chaves que não existem no usuário serão desconsideradas.</p>

<h3>**DELETE**</h3>

```
http://localhost:300/user/:id

```

<p>Espera-se que retorne todos os usuários, exceto o usuario com o id correspondente.</p>
