﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Prilozhenie_parkomata
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Услуга.
    /// </summary>
    // *** Start programmer edit section *** (Услуга CustomAttributes)

    // *** End programmer edit section *** (Услуга CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("УслугаE", new string[] {
            "НомерУсл as \'Номер усл\'",
            "Наименование as \'Наименование\'",
            "Длительность as \'Длительность\'",
            "Стоимость as \'Стоимость\'"})]
    [AssociatedDetailViewAttribute("УслугаE", "ЗапОбУсл", "ЗапОбУслE", true, "", "Зап об усл", true, new string[] {
            ""})]
    [View("УслугаL", new string[] {
            "НомерУсл as \'Номер усл\'",
            "Наименование as \'Наименование\'",
            "Длительность as \'Длительность\'",
            "Стоимость as \'Стоимость\'"})]
    public class Услуга : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерУсл;
        
        private IIS.Prilozhenie_parkomata.Услуги fНаименование;
        
        private string fДлительность;
        
        private IIS.Prilozhenie_parkomata.Стоимость fСтоимость;
        
        private IIS.Prilozhenie_parkomata.DetailArrayOfЗапОбУсл fЗапОбУсл;
        
        // *** Start programmer edit section *** (Услуга CustomMembers)

        // *** End programmer edit section *** (Услуга CustomMembers)

        
        /// <summary>
        /// Длительность.
        /// </summary>
        // *** Start programmer edit section *** (Услуга.Длительность CustomAttributes)

        // *** End programmer edit section *** (Услуга.Длительность CustomAttributes)
        [StrLen(255)]
        public virtual string Длительность
        {
            get
            {
                // *** Start programmer edit section *** (Услуга.Длительность Get start)

                // *** End programmer edit section *** (Услуга.Длительность Get start)
                string result = this.fДлительность;
                // *** Start programmer edit section *** (Услуга.Длительность Get end)

                // *** End programmer edit section *** (Услуга.Длительность Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуга.Длительность Set start)

                // *** End programmer edit section *** (Услуга.Длительность Set start)
                this.fДлительность = value;
                // *** Start programmer edit section *** (Услуга.Длительность Set end)

                // *** End programmer edit section *** (Услуга.Длительность Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Услуга.Наименование CustomAttributes)

        // *** End programmer edit section *** (Услуга.Наименование CustomAttributes)
        public virtual IIS.Prilozhenie_parkomata.Услуги Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Услуга.Наименование Get start)

                // *** End programmer edit section *** (Услуга.Наименование Get start)
                IIS.Prilozhenie_parkomata.Услуги result = this.fНаименование;
                // *** Start programmer edit section *** (Услуга.Наименование Get end)

                // *** End programmer edit section *** (Услуга.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуга.Наименование Set start)

                // *** End programmer edit section *** (Услуга.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Услуга.Наименование Set end)

                // *** End programmer edit section *** (Услуга.Наименование Set end)
            }
        }
        
        /// <summary>
        /// НомерУсл.
        /// </summary>
        // *** Start programmer edit section *** (Услуга.НомерУсл CustomAttributes)

        // *** End programmer edit section *** (Услуга.НомерУсл CustomAttributes)
        public virtual int НомерУсл
        {
            get
            {
                // *** Start programmer edit section *** (Услуга.НомерУсл Get start)

                // *** End programmer edit section *** (Услуга.НомерУсл Get start)
                int result = this.fНомерУсл;
                // *** Start programmer edit section *** (Услуга.НомерУсл Get end)

                // *** End programmer edit section *** (Услуга.НомерУсл Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуга.НомерУсл Set start)

                // *** End programmer edit section *** (Услуга.НомерУсл Set start)
                this.fНомерУсл = value;
                // *** Start programmer edit section *** (Услуга.НомерУсл Set end)

                // *** End programmer edit section *** (Услуга.НомерУсл Set end)
            }
        }
        
        /// <summary>
        /// Стоимость.
        /// </summary>
        // *** Start programmer edit section *** (Услуга.Стоимость CustomAttributes)

        // *** End programmer edit section *** (Услуга.Стоимость CustomAttributes)
        public virtual IIS.Prilozhenie_parkomata.Стоимость Стоимость
        {
            get
            {
                // *** Start programmer edit section *** (Услуга.Стоимость Get start)

                // *** End programmer edit section *** (Услуга.Стоимость Get start)
                IIS.Prilozhenie_parkomata.Стоимость result = this.fСтоимость;
                // *** Start programmer edit section *** (Услуга.Стоимость Get end)

                // *** End programmer edit section *** (Услуга.Стоимость Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуга.Стоимость Set start)

                // *** End programmer edit section *** (Услуга.Стоимость Set start)
                this.fСтоимость = value;
                // *** Start programmer edit section *** (Услуга.Стоимость Set end)

                // *** End programmer edit section *** (Услуга.Стоимость Set end)
            }
        }
        
        /// <summary>
        /// Услуга.
        /// </summary>
        // *** Start programmer edit section *** (Услуга.ЗапОбУсл CustomAttributes)

        // *** End programmer edit section *** (Услуга.ЗапОбУсл CustomAttributes)
        public virtual IIS.Prilozhenie_parkomata.DetailArrayOfЗапОбУсл ЗапОбУсл
        {
            get
            {
                // *** Start programmer edit section *** (Услуга.ЗапОбУсл Get start)

                // *** End programmer edit section *** (Услуга.ЗапОбУсл Get start)
                if ((this.fЗапОбУсл == null))
                {
                    this.fЗапОбУсл = new IIS.Prilozhenie_parkomata.DetailArrayOfЗапОбУсл(this);
                }
                IIS.Prilozhenie_parkomata.DetailArrayOfЗапОбУсл result = this.fЗапОбУсл;
                // *** Start programmer edit section *** (Услуга.ЗапОбУсл Get end)

                // *** End programmer edit section *** (Услуга.ЗапОбУсл Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуга.ЗапОбУсл Set start)

                // *** End programmer edit section *** (Услуга.ЗапОбУсл Set start)
                this.fЗапОбУсл = value;
                // *** Start programmer edit section *** (Услуга.ЗапОбУсл Set end)

                // *** End programmer edit section *** (Услуга.ЗапОбУсл Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "УслугаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УслугаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УслугаE", typeof(IIS.Prilozhenie_parkomata.Услуга));
                }
            }
            
            /// <summary>
            /// "УслугаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УслугаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УслугаL", typeof(IIS.Prilozhenie_parkomata.Услуга));
                }
            }
        }
    }
}
