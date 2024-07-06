const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(bodyParser());

let tickets = [];

// GET request to retrieve all tickets
router.get('/api/tickets', ctx => {
    ctx.body = tickets.map(ticket => ({
        id: ticket.id,
        name: ticket.name,
        status: ticket.status,
        created: ticket.created
    }));
});

// GET request to retrieve ticket details by id
router.get('/api/tickets/:id', ctx => {
    const ticket = tickets.find(t => t.id === parseInt(ctx.params.id));
    if (ticket) {
        ctx.body = {
            id: ticket.id,
            name: ticket.name,
            description: ticket.description,
            status: ticket.status,
            created: ticket.created
        };
    } else {
        ctx.status = 404;
    }
});

// POST request to create a new ticket
router.post('/api/tickets', ctx => {
    const { name, description, status } = ctx.request.body;
    const id = tickets.length + 1;
    const newTicket = { id, name, description, status, created: Date.now() };
    tickets.push(newTicket);
    ctx.body = newTicket;
});

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
