const Fastify  = require('fastify')

const fastify = Fastify({
    logger: true
})

fastify.register(require('@fastify/postgres'), {
    connectionString: 
'postgres://ansara_user:ansara_password@158.160.65.232:5432/ansara'
})

// Declare a route
fastify.get('/api/task/all', async function handler (_, reply) {
    const { rows: data } = await fastify.pg.query('SELECT * FROM task')

    reply.send({ data })
})

fastify.post('/api/task/create', async function handler(request, reply) {
    const body = JSON.parse(request.body)
    if ('id' in body && 'description' in body && 'time' in body) {
        await fastify.pg.query(`
            INSERT INTO task (id, description, time)
            VALUES ('${body.id}', '${body.description}', '${body.time}');
        `)
        reply.code(200).send('OK')
    }
    reply.code(400).send({ message: 'Body is not valid!' })
})

// Run the server!
try {
    fastify.listen({ port: 8000, host: '0.0.0.0' })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}
