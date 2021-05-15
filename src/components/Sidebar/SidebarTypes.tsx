
import { SvgIconTypeMap } from '@material-ui/core'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'

export type SidebarOptionProps = {
    Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>
    title: string 
    addChannelOption?: boolean
    id?: string
}