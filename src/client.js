import sanityClient from '@sanity/client'

export default sanityClient({
    projectId:"6zdwq6tr",
    dataset:"production",
    useCdn: true,
})