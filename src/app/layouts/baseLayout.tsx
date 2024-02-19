import { LayoutFooter } from '@widgets/LayoutFooter'
import { Layout } from '@shared/ui'
import { LayoutHeader } from '@widgets/LayoutHeader'

export const baseLayout = (
    <Layout headerSlot={<LayoutHeader />} footerSlot={<LayoutFooter />} />
)
