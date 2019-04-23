module.exports = {
    name: 'CustomerClient',
    object: {
        level: {
            _type: 'int64',
            _description:
                'Distance between given customer and client. For self link, the level value\nwill be 0. Read only.',
        },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the customer client.\nCustomerClient resource names have the form:\n`customers/{customer_id}/customerClients/{client_customer_id}`',
        },
        client_customer: {
            _type: 'string',
            _description: 'The resource name of the client-customer which is linked to\nthe given customer. Read only.',
        },
        hidden: {
            _type: 'boolean',
            _description:
                'Specifies whether this is a hidden account. Learn more about hidden\naccounts <a\nhref="https://support.google.com/google-ads/answer/7519830">here</a>. Read\nonly.',
        },
    },
    methods: ['get', 'list'],
}