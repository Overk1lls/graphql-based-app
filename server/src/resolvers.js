module.exports = {
    Query: {
        cognito: (parent, { username }, { db }) => db.collection('users').findOne({ username: username }),
        totalCognito: (parent, args, { db }) => db.collection('users').estimatedDocumentCount(),
        allCognito: (parent, args, { db }) => db.collection('users').find().toArray(),
        fetchDate: async (parent, args, { db }) => {
            const date =  await db.collection('dates').findOne();
            return date.fetchDate.minutes;
        }
    }
};